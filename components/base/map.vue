<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet.fullscreen'
import 'leaflet.fullscreen/Control.FullScreen.css'
import 'leaflet/dist/leaflet.css'
import '@/utils/leaflet/'
import '@/utils/leaflet/VControl'
import { mapOptions, poiOptions } from '@/libs/leaflet/constants'

const emit = defineEmits(['ready'])
const props = defineProps({
  overlays: Boolean,
  traffic: Boolean,
  search: Boolean,
  geozone: Boolean,
  cluster: Boolean,
})

const clusterControlEL = ref(null)
const overlayControlEL = ref(null)
const trafficControlEL = ref(null)
const searchControlEL = ref(null)
const geozoneControlEL = ref(null)

// Base map layers & overlays
const baseOverlays = {
  Traffic: L.gridLayer.googleMutant({ type: 'roadmap', maxZoom: 18 }),
  Transit: L.gridLayer.googleMutant({ type: 'roadmap', maxZoom: 18 }),
}

const baseLayers = {
  Grayscale: L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    className: 'grayscale-layer',
  }),
  OSM: L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'),
  Roadmap: L.gridLayer.googleMutant({ type: 'roadmap' }),
  Satellite: L.gridLayer.googleMutant({ type: 'satellite' }),
  Terrain: L.gridLayer.googleMutant({ type: 'terrain' }),
  Hybrid: L.gridLayer.googleMutant({ type: 'hybrid' }),
}

baseOverlays['Traffic'].addGoogleLayer('TrafficLayer')
baseOverlays['Transit'].addGoogleLayer('TransitLayer')

const layerImages = {
  Grayscale: './images/map-layers/grayscale.png',
  OSM: './images/map-layers/osm.png',
  Hybrid: './images/map-layers/hybrid.png',
  Satellite: './images/map-layers/satellite.png',
  Roadmap: './images/map-layers/roadmap.png',
  Terrain: './images/map-layers/terrain.png',
}

const heatmapLayer = ref(null)
const heatmapData = ref([])
const layertumbmargin = ref('-32')

let map = null
let options = {
  mapCenter: mapOptions.mapCenter,
  mapZoom: mapOptions.mapZoom,
  defaultLayer: 'OSM',
  baseLayers: baseLayers,
  baseOverlays: baseOverlays,
}

const mapContainer = ref()
const currentLayerName = ref()
const ready = ref(false)

onMounted(async () => {
  map = new L.Map(mapContainer.value, {
    attributionControl: false,
    zoomControl: false,
    minZoom: 3,
    maxZoom: 18,
    editable: true,
    layers: baseLayers[options.defaultLayer],
    defaultLayer: options.defaultLayer,
    layersAvailable: options.baseLayers,
    overlaysAvailable: options.baseOverlays,
    currentLayer: null,
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: 'bottomright',
    },
  }).setView(options.mapCenter, options.mapZoom)
  addControls()
  setLayer('OSM')
  map.whenReady(() => {
    ready.value = true
    emit('ready', map)
  })
})

const addControls = () => {
  L.control
    .zoom({
      position: 'bottomright',
    })
    .addTo(map)

  if (props.overlays) {
    overlayControlEL.value = L.DomUtil.create('div')
    map.addControl(new L.VControl({ position: 'topright' }, overlayControlEL.value))
  }

  if (props.traffic) {
    trafficControlEL.value = L.DomUtil.create('div')
    map.addControl(new L.VControl({ position: 'topright' }, trafficControlEL.value))
  }

  if (props.geozone) {
    geozoneControlEL.value = L.DomUtil.create('div')
    map.addControl(new L.VControl({ position: 'topright' }, geozoneControlEL.value))
  }

  if (props.search) {
    searchControlEL.value = L.DomUtil.create('div')
    map.addControl(new L.VControl({ position: 'topleft' }, searchControlEL.value))
  }

  if (props.cluster) {
    clusterControlEL.value = L.DomUtil.create('div')
    map.addControl(new L.VControl({ position: 'bottomleft' }, clusterControlEL.value))
  }
}

const getElem = (selector) => map._container.querySelector(selector)

const setLayer = async (layerName) => {
  currentLayerName.value = layerName
  const layer = baseLayers[layerName] || baseOverlays[layerName]
  if (map.options.currentLayer !== null) {
    map.removeLayer(map.options.currentLayer)
  }
  map.addLayer(layer)
  map.options.currentLayer = layer
}

const proto_setPos = L.Marker.prototype._setPos
const rotateableMarker = L.Marker.extend({
  _setPos(pos) {
    proto_setPos.call(this, pos)
    this._setRotation(this.options.rotation)
  },
  _setRotation(rotation) {
    if (typeof rotation === 'number') {
      this._icon.style[L.DomUtil.TRANSFORM + 'Origin'] = this.options.rotationOrigin || 'center'
      const transform = this._icon.style[L.DomUtil.TRANSFORM] + ` rotate(${rotation}deg)`
      this._icon.style[L.DomUtil.TRANSFORM] = transform
    }
  },
})

//#endregion

//#region Zones

const zoneGroupLayer = new L.FeatureGroup()

function makeZoneCircle(zone, options) {
  // Circle
  if (zone?.latitude && zone?.longitude && zone?.radius) {
    var latlngs = []
    var center = L.latLng(zone.latitude, zone.longitude)
    var bounds = center.toBounds(zone.radius)
    latlngs.push([bounds._northEast.lat, bounds._northEast.lng])
    latlngs.push([bounds._southWest.lat, bounds._southWest.lng])
    var _zone = L.circle([zone.latitude, zone.longitude], {
      radius: zone.radius,
      id: zone.id,
      itemType: 'circle',
      weight: options.weight,
      bounds: latlngs,
      color: zone.color,
      fillOpacity: options.fillOpacity,
      stroke: zone.color,
      strokeOpacity: options.strokeOpacity,
      strokeWidth: options.strokeWidth,
      // opacity: 0.9
    })
    zoneGroupLayer.addLayer(_zone)
  }
  // if(openedRowId.value == item.id) {
  // 	zone.enableEdit();
  // 	zone.on("editable:editing", zoneShapeEdited);
  // }
}

function makeZonePolygon(zone, options) {
  // Polygon
  if (zone?.encoded_polygon) {
    var latlngs = []
    var encodedPolygon = L.Polygon.fromEncoded(zone.encoded_polygon)
    encodedPolygon._latlngs[0].map((latlng) => {
      latlngs.push([latlng.lat, latlng.lng])
    })
    var _zone = L.polygon(latlngs, {
      id: zone.id,
      itemType: 'polygon',
      bounds: latlngs,
      color: zone.color,
      fillOpacity: options.fillOpacity,
      weight: options.weight,
      stroke: zone.color,
      strokeOpacity: options.strokeOpacity,
      strokeWidth: options.strokeWidth,
      // opacity: 0.9
    })
    zoneGroupLayer.addLayer(_zone)
  }
  // if(openedRowId.value == item.id) {
  // 	zone.enableEdit();
  // 	zone.on("editable:editing", zoneShapeEdited);
  // }
  // zoneMarkers.value.push(zone);
}

async function createZones(zones, options) {
  await Promise.all(
    zones.map((z) => {
      if (z.shape === 'circle') {
        makeZoneCircle(z, options)
      } else {
        makeZonePolygon(z, options)
      }
    })
  )
  map.addLayer(zoneGroupLayer)
  return zoneGroupLayer
}

function toggleZones() {
  if (map.hasLayer(zoneGroupLayer)) {
    map.removeLayer(zoneGroupLayer)
  } else {
    map.addLayer(zoneGroupLayer)
  }
  return map.hasLayer(zoneGroupLayer)
}

//#endregion

//#region pois

const poiGroupLayer = new L.FeatureGroup()

function createPoiLayer({ lat, lng, radius, icon }) {
  const poiIcon = L.icon({
    iconUrl: poiOptions.getIcon(icon), // Adjust the path as needed
    iconSize: poiOptions.iconSize, // Adjust the icon size as needed
    iconAnchor: poiOptions.iconAnchor, // Adjust the anchor point as needed
  })
  const poiLayer = new L.FeatureGroup()
  const poiMarker = L.marker([lat, lng], { icon: poiIcon }).addTo(poiLayer)
  let poiZone = null
  if (radius) {
    poiZone = L.circle([lat, lng], {
      color: poiOptions.color,
      fillColor: poiOptions.fillColor,
      fillOpacity: poiOptions.fillOpacity,
      radius: radius,
      opacity: poiOptions.opacity,
      type: 'zone',
    }).addTo(poiLayer)
  }
  return { poiLayer, poiMarker, poiZone }
}

const createPois = async (pois, cb) => {
  if (pois?.length > 0) {
    await Promise.all(
      pois.map((poi) => {
        if (poi?.latitude && poi?.longitude) {
          const { poiLayer, poiMarker, poiZone } = createPoiLayer({
            lat: poi.latitude,
            lng: poi.longitude,
            radius: poi.radius,
            icon: poi.icon,
          })
          poiLayer.options.id = poi.id
          poiLayer.options.title = poi.title
          poiGroupLayer.addLayer(poiLayer)
          if (typeof cb == 'function') {
            cb({ poiLayer, poiMarker, poiZone })
          }
        }
      })
    )
  }
  map.addLayer(poiGroupLayer)
  return poiGroupLayer
}

function togglePois() {
  if (map.hasLayer(poiGroupLayer)) {
    map.removeLayer(poiGroupLayer)
  } else {
    map.addLayer(poiGroupLayer)
  }
  return map.hasLayer(poiGroupLayer)
}

//#endregion

const onResize = (size) => {
  if (map) {
    map.invalidateSize()
  }
}

defineExpose({
  getElem,
  setLayer,
  getMap: () => map,
  rotateableMarker,
  createZones,
  getZoneGroupLayer: () => zoneGroupLayer,
  getPoiGroupLayer: () => poiGroupLayer,
  toggleZones,
  togglePois,
  createPoiLayer,
  createPois,
})
</script>
<template>
  <div class="base-map">
    <q-resize-observer debounce="500" @resize="onResize" />
    <div ref="mapContainer" class="map-container"></div>
    <Teleport v-if="overlayControlEL" :to="overlayControlEL">
      <div
        class="row"
        style="align-items: flex-start; min-height: 60px"
        @mouseenter="layertumbmargin = '-5'"
        @mouseleave="layertumbmargin = '-32'"
      >
        <div
          v-for="(layer, index) in baseLayers"
          :key="index"
          :class="`thumb layer-thumb layer_${index} ${currentLayerName === index ? 'layer-selected' : ''}`"
          @click.stop="setLayer(index)"
          :style="`margin-left:${layertumbmargin}px`"
        >
          <q-tooltip class="bg-dark-1">{{ index }}</q-tooltip>
        </div>
      </div>
    </Teleport>

    <Teleport v-if="trafficControlEL && props.traffic" :to="trafficControlEL">
      <q-btn
        unelevated
        color="white"
        :ripple="false"
        @click="setLayer(currentLayerName === 'Traffic' ? 'OSM' : 'Traffic')"
        class="control-btn"
        :class="{ selected: currentLayerName === 'Traffic' }"
      >
        <q-tooltip class="bg-dark-1">
          {{ currentLayerName === 'Traffic' ? 'Disable Traffic Layer' : 'Enable Traffic Layer' }}
        </q-tooltip>
        <q-icon :color="currentLayerName === 'Traffic' ? 'primary' : 'secondary'" name="fams:passport" />
      </q-btn>
    </Teleport>

    <Teleport v-if="clusterControlEL && props.cluster" :to="clusterControlEL">
      <slot name="cluster"></slot>
    </Teleport>

    <Teleport v-if="geozoneControlEL && props.geozone" :to="geozoneControlEL">
      <div class="control-btn-grp flex justify-center">
        <slot name="geozone"></slot>
      </div>
    </Teleport>

    <Teleport v-if="searchControlEL && props.search" :to="searchControlEL">
      <slot name="search"></slot>
    </Teleport>

    <Teleport v-if="ready" :to="getElem('.leaflet-right.leaflet-top')">
      <slot name="topRight">
        <slot name="preTraffic"></slot>

        <div class="leaflet-control"></div>
      </slot>
    </Teleport>
    <Teleport v-if="ready" :to="getElem('.leaflet-left.leaflet-top')">
      <slot name="topLeft"> </slot>
    </Teleport>
    <Teleport v-if="ready" :to="getElem('.leaflet-left.leaflet-bottom')">
      <slot name="bottomLeft"> </slot>
    </Teleport>
    <Teleport v-if="ready" :to="getElem('.leaflet-right.leaflet-bottom')">
      <slot name="bottomRight"> </slot>
    </Teleport>
  </div>
</template>
<style lang="scss">
@import '@/assets/styles/basemap.scss';
.base-map {
  height: 100%;
  width: 100%;
}

.map-container {
  height: 100%;
  width: 100%;
}
</style>

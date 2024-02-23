export class Aircraft {
  constructor({
    id = null,
    type_id = null,
    operatorid = null,
    modelid = null,
    title = null,
    tailnumber = null,
    seats = 16,
    cabinheight = {
      value: '1.88',
      unit: 'meter',
    },
    cabinwidth = {
      value: '2.88',
      unit: 'meter',
    },
    cabinlength = {
      value: '11.88',
      unit: 'meter',
    },
    maxflighttime = {
      value: 48600,
      unit: 'seconds',
    },
    speed = {
      value: 900,
      unit: 'kilometer_per_hour',
    },
    maxdistance = {
      value: 9975.0,
      unit: 'kilometer',
    },
    payload = {
      value: null,
      unit: 'ton',
    },
    type_title = null,
    model_title = null,
  } = {}) {
    this.id = id
    this.type_id = type_id
    this.operatorid = operatorid
    this.modelid = modelid
    this.title = title
    this.tailnumber = tailnumber
    this.seats = seats
    this.cabinheight = cabinheight
    this.cabinwidth = cabinwidth
    this.cabinlength = cabinlength
    this.maxflighttime = maxflighttime
    this.speed = speed
    this.maxdistance = maxdistance
    this.payload = payload
    this.type_title = type_title
    this.model_title = model_title
  }
}

export default class ActionCreator {
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }

  returnAction() {
    return {
      type: this.type,
      data: this.data
    };
  }
}

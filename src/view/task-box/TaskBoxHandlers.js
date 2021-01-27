export function updateList(event) {
    if (event.charCode == 13) {
      let newItem = { id: this.state.list.length + 1, task: event.target.value }
      const updatedList = { list: [...this.state.list, newItem] };
      // this.state.list.push(event.target.value);
      this.setState(updatedList);
      updateLocalStorage(this,updatedList.list);
      event.target.value = '';
    }
  }

  export function removeItem(index) {
    this.state.list.splice(index, 1);
    const updatedList = { list: this.state.list };
    this.setState(updatedList);
    this.setState({ showNotes: false });
    updateLocalStorage(this,updatedList.list);
    if (this.state.selected == index) {
      this.setState({ showNotes: false })
    }
  }

  export function updateLocalStorage(box,updatedList) {
    localStorage.setItem(box.state.type, JSON.stringify(updatedList));
  }
  export function loadCache(cachedList, color) {
    if (localStorage.getItem(color)) {
      cachedList = JSON.parse(localStorage.getItem(color));
    }
    return cachedList;
  }
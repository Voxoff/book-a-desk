class API {
  static init() {
    this.gatekeeperURL = 'https://flatiron-keeper-of-gates.herokuapp.com'
    // this.gatekeeperURL = 'http://localhost:9999'
    // this.baseURL = 'http://localhost:3000/api/v1'
    this.baseURL = 'https://book-a-desk-api.herokuapp.com/api/v1'
    this.addBookingURL = this.baseURL + '/add_booking'
    this.tablesURL = this.baseURL + '/tables'
    this.callbackURL = this.baseURL + '/auth/github/callback'
  }

  static get(url) {
    return fetch(url, {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    }).then(resp => resp.json())
  }

  static post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
  }
}

API.init()

export default API

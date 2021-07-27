class Auth {
  /**
   * @description construtor for Auth used to initialise variables
   */
  constructor() {
    this.authenticated = false;
  }

  /**
   * @description Login function used to set authenticated value to true
   * @param callback
   * @return callback
   */
  login = (callback) => {
    this.authenticated = true;
    callback();
  };

  /**
   * @description Logout function used to set authenticated value to false to protect from unauthorized access
   * @param callback
   * @return callback
   */
  logout = (callback) => {
    this.authenticated = false;
    callback();
  };

  /**
   * @description function used to return authenticated value
   * @return autheticated boolean value
   */
  isAuthenticated = () => {
    return this.authenticated;
  };
}

export default new Auth();

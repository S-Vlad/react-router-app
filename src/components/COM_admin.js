import React, { Component } from 'react';


export default class Admin extends Component {
  static isAdmin() {
    if (window.localStorage.getItem('loginValue') !== 'admin') {
      return false; //получаем значение из локального хранилища и если оно не совпадает, редиректим на главную страницу, иначе на 'Admin'
    }

    return true;
  }

  render() {
    return(
      <main className='col-md-12'>
        <h3>Администраторская</h3>
      </main>
    );
  }
}
// creat a Class Called Action 

class Actions {


static visitUrl(url) {
    return new Promise((resolve, reject) => {
    
      setTimeout(() => {
        if (url.startsWith('www') || url.startsWith('https://')) {
          resolve('URL visited successfully');
        } else {
          reject('Wrong URL');
        }
      }, 1000);
    });
  }

  static login(username, password) {
    return new Promise((resolve, reject) => {
     
      setTimeout(() => {
        if (username === 'TechGlobal' && password === 'Test1234') {
          resolve('Logged in successfully');
        } else {
          reject('Wrong credentials');
        }
      }, 3000); 
    });
  }
  staticlogin(username, password) {
    return new Promise((resolve, reject) => {
     
      setTimeout(() => {
        if (username === 'TechGlobal' && password === 'Test1234') {
          resolve('Logged in successfully');
        } else {
          reject('Wrong credentials');
        }
      }, 3000); 
    });
}
  visitUrl('https://example.com')
    .then((message) => console.log(message)) 
    .catch((error) => console.log(error))

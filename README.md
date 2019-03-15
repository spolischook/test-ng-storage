# TestStore

STR:
- ng new testStore
- cd testStore 
- npm install @ngx-pwa/local-storage@6 --save
- ng serve

code for testing is in [AppComponent](./src/app/app.component.ts)

```javascript
  ngOnInit() {
    this.localStorage.setItem('foo', 'bar').subscribe(() => {
      this.localStorage.getItem('foo').subscribe(data => {
        console.log('The foo is: ', data);
      });
    });
  }
```

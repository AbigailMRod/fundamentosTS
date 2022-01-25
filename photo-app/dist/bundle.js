(()=>{"use strict";var e={987:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Album=void 0;const r=i(123);class o extends r.Item{constructor(e,t){super(e,t),this.picture=[]}addPicture(e){this.picture.push(e)}}t.Album=o},123:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0,t.Item=class{constructor(e,t){this.id=e,this.title=t}}},945:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.PhotoOrientation=void 0,(i=t.PhotoOrientation||(t.PhotoOrientation={}))[i.Landscape=0]="Landscape",i[i.Portrait=1]="Portrait",i[i.Square=2]="Square",i[i.Panorama=3]="Panorama"},449:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Picture=void 0;const r=i(123);class o extends r.Item{constructor(e,t,i,r){super(e,t),this._date=i,this._orientation=r}toString(){return`[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`}}t.Picture=o},536:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0,t.User=class{constructor(e,t,i,r){this.id=e,this.username=t,this.fisrtName=i,this.isPro=r,this.album=[]}addAlbum(e){this.album.push(e)}removeAlbum(e){const t=this.album.findIndex((t=>t.id===e.id));let i;return t>=0&&(i=this.album[t],this.album.splice(t,1)),i}}}},t={};function i(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,i),s.exports}(()=>{const e=i(536),t=i(987),r=i(945),o=i(449),s=new e.User(1,"abifq","Abi",!0),a=new t.Album(10,"Platzi-pictures"),n=new o.Picture(1,"Code in my desk","2022-01-25",r.PhotoOrientation.Landscape);s.addAlbum(a),a.addPicture(n),console.log("User: ",s),s.removeAlbum(a),console.log("USER: ",s)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJ3Q0FDQUEsT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdERELEVBQVFFLFdBQVEsRUFDaEIsTUFBTUMsRUFBUyxFQUFRLEtBQ3ZCLE1BQU1ELFVBQWNDLEVBQU9DLEtBQ3ZCQyxZQUFZQyxFQUFJQyxHQUNaQyxNQUFNRixFQUFJQyxHQUNWRSxLQUFLQyxRQUFVLEdBRW5CQyxXQUFXRCxHQUNQRCxLQUFLQyxRQUFRRSxLQUFLRixJQUcxQlYsRUFBUUUsTUFBUUEsRyxZQ1poQkosT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdERELEVBQVFJLFVBQU8sRUFPZkosRUFBUUksS0FOUixNQUNJQyxZQUFZQyxFQUFJQyxHQUNaRSxLQUFLSCxHQUFLQSxFQUNWRyxLQUFLRixNQUFRQSxLLFlDRnJCLElBQVdNLEVBSFhmLE9BQU9DLGVBQWVDLEVBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RERCxFQUFRYSxzQkFBbUIsR0FFaEJBLEVBS1diLEVBQVFhLG1CQUFxQmIsRUFBUWEsaUJBQW1CLEtBSnpEQSxFQUE0QixVQUFJLEdBQUssWUFDdERBLEVBQWlCQSxFQUEyQixTQUFJLEdBQUssV0FDckRBLEVBQWlCQSxFQUF5QixPQUFJLEdBQUssU0FDbkRBLEVBQWlCQSxFQUEyQixTQUFJLEdBQUssWSxjQ1B6RGYsT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdERELEVBQVFjLGFBQVUsRUFDbEIsTUFBTVgsRUFBUyxFQUFRLEtBQ3ZCLE1BQU1XLFVBQWdCWCxFQUFPQyxLQUN6QkMsWUFBWUMsRUFBSUMsRUFBT1EsRUFBT0MsR0FDMUJSLE1BQU1GLEVBQUlDLEdBQ1ZFLEtBQUtNLE1BQVFBLEVBQ2JOLEtBQUtPLGFBQWVBLEVBRXhCQyxXQUNJLE1BQU8sUUFBUVIsS0FBS0gsY0FBY0csS0FBS0YsdUJBQXVCRSxLQUFLTyxpQkFHM0VoQixFQUFRYyxRQUFVQSxHLFlDYmxCaEIsT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdERELEVBQVFrQixVQUFPLEVBdUJmbEIsRUFBUWtCLEtBdEJSLE1BQ0liLFlBQVlDLEVBQUlhLEVBQVVDLEVBQVdDLEdBQ2pDWixLQUFLSCxHQUFLQSxFQUNWRyxLQUFLVSxTQUFXQSxFQUNoQlYsS0FBS1csVUFBWUEsRUFDakJYLEtBQUtZLE1BQVFBLEVBQ2JaLEtBQUthLE1BQVEsR0FFakJDLFNBQVNELEdBQ0xiLEtBQUthLE1BQU1WLEtBQUtVLEdBRXBCRSxZQUFZRixHQUVSLE1BQU1HLEVBQVFoQixLQUFLYSxNQUFNSSxXQUFVQyxHQUFLQSxFQUFFckIsS0FBT2dCLEVBQU1oQixLQUN2RCxJQUFJc0IsRUFLSixPQUpJSCxHQUFTLElBQ1RHLEVBQWNuQixLQUFLYSxNQUFNRyxHQUN6QmhCLEtBQUthLE1BQU1PLE9BQU9KLEVBQU8sSUFFdEJHLE1DckJYRSxFQUEyQixHQUcvQixTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhakMsUUFHckIsSUFBSW1DLEVBQVNMLEVBQXlCRSxHQUFZLENBR2pEaEMsUUFBUyxJQU9WLE9BSEFvQyxFQUFvQkosR0FBVUcsRUFBUUEsRUFBT25DLFFBQVMrQixHQUcvQ0ksRUFBT25DLFEsTUNuQmYsTUFBTXFDLEVBQVMsRUFBUSxLQUNqQkMsRUFBVSxFQUFRLEtBQ2xCQyxFQUFzQixFQUFRLEtBQzlCQyxFQUFZLEVBQVEsS0FDcEJDLEVBQU8sSUFBSUosRUFBT25CLEtBQUssRUFBRyxRQUFTLE9BQU8sR0FDMUNJLEVBQVEsSUFBSWdCLEVBQVFwQyxNQUFNLEdBQUksbUJBQzlCUSxFQUFVLElBQUk4QixFQUFVMUIsUUFBUSxFQUFHLGtCQUFtQixhQUFjeUIsRUFBb0IxQixpQkFBaUI2QixXQUUvR0QsRUFBS2xCLFNBQVNELEdBQ2RBLEVBQU1YLFdBQVdELEdBQ2pCaUMsUUFBUUMsSUFBSSxTQUFVSCxHQUV0QkEsRUFBS2pCLFlBQVlGLEdBQ2pCcUIsUUFBUUMsSUFBSSxTQUFVSCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL2FsYnVtLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9pdGVtLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9waG90by1vcmllbnRhdGlvbi50cyIsIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvcGljdHVyZS50cyIsIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvdXNlci50cyIsIndlYnBhY2s6Ly9waG90by1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFsYnVtID0gdm9pZCAwO1xuY29uc3QgaXRlbV8xID0gcmVxdWlyZShcIi4vaXRlbVwiKTtcbmNsYXNzIEFsYnVtIGV4dGVuZHMgaXRlbV8xLkl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xuICAgICAgICBzdXBlcihpZCwgdGl0bGUpO1xuICAgICAgICB0aGlzLnBpY3R1cmUgPSBbXTtcbiAgICB9XG4gICAgYWRkUGljdHVyZShwaWN0dXJlKSB7XG4gICAgICAgIHRoaXMucGljdHVyZS5wdXNoKHBpY3R1cmUpO1xuICAgIH1cbn1cbmV4cG9ydHMuQWxidW0gPSBBbGJ1bTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JdGVtID0gdm9pZCAwO1xuY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbn1cbmV4cG9ydHMuSXRlbSA9IEl0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGhvdG9PcmllbnRhdGlvbiA9IHZvaWQgMDtcbnZhciBQaG90b09yaWVudGF0aW9uO1xuKGZ1bmN0aW9uIChQaG90b09yaWVudGF0aW9uKSB7XG4gICAgUGhvdG9PcmllbnRhdGlvbltQaG90b09yaWVudGF0aW9uW1wiTGFuZHNjYXBlXCJdID0gMF0gPSBcIkxhbmRzY2FwZVwiO1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIlBvcnRyYWl0XCJdID0gMV0gPSBcIlBvcnRyYWl0XCI7XG4gICAgUGhvdG9PcmllbnRhdGlvbltQaG90b09yaWVudGF0aW9uW1wiU3F1YXJlXCJdID0gMl0gPSBcIlNxdWFyZVwiO1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIlBhbm9yYW1hXCJdID0gM10gPSBcIlBhbm9yYW1hXCI7XG59KShQaG90b09yaWVudGF0aW9uID0gZXhwb3J0cy5QaG90b09yaWVudGF0aW9uIHx8IChleHBvcnRzLlBob3RvT3JpZW50YXRpb24gPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBpY3R1cmUgPSB2b2lkIDA7XG5jb25zdCBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtXCIpO1xuY2xhc3MgUGljdHVyZSBleHRlbmRzIGl0ZW1fMS5JdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIF9kYXRlLCBfb3JpZW50YXRpb24pIHtcbiAgICAgICAgc3VwZXIoaWQsIHRpdGxlKTtcbiAgICAgICAgdGhpcy5fZGF0ZSA9IF9kYXRlO1xuICAgICAgICB0aGlzLl9vcmllbnRhdGlvbiA9IF9vcmllbnRhdGlvbjtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgW2lkOiAke3RoaXMuaWR9LCB0aXRsZTogJHt0aGlzLnRpdGxlfSwgb3JpZW50YXRpb246ICR7dGhpcy5fb3JpZW50YXRpb259XWA7XG4gICAgfVxufVxuZXhwb3J0cy5QaWN0dXJlID0gUGljdHVyZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vc2VyID0gdm9pZCAwO1xuY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IoaWQsIHVzZXJuYW1lLCBmaXNydE5hbWUsIGlzUHJvKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLmZpc3J0TmFtZSA9IGZpc3J0TmFtZTtcbiAgICAgICAgdGhpcy5pc1BybyA9IGlzUHJvO1xuICAgICAgICB0aGlzLmFsYnVtID0gW107XG4gICAgfVxuICAgIGFkZEFsYnVtKGFsYnVtKSB7XG4gICAgICAgIHRoaXMuYWxidW0ucHVzaChhbGJ1bSk7XG4gICAgfVxuICAgIHJlbW92ZUFsYnVtKGFsYnVtKSB7XG4gICAgICAgIC8vIGJ1c2NhciBhbGJ1bSB5IHNpIGV4aXN0ZSwgZWxpbWluYXJsb1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYWxidW0uZmluZEluZGV4KGEgPT4gYS5pZCA9PT0gYWxidW0uaWQpO1xuICAgICAgICBsZXQgZGVsZXRlQWxidW07XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBkZWxldGVBbGJ1bSA9IHRoaXMuYWxidW1baW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5hbGJ1bS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWxldGVBbGJ1bTtcbiAgICB9XG59XG5leHBvcnRzLlVzZXIgPSBVc2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXNlcl8xID0gcmVxdWlyZShcIi4vdXNlclwiKTtcbmNvbnN0IGFsYnVtXzEgPSByZXF1aXJlKFwiLi9hbGJ1bVwiKTtcbmNvbnN0IHBob3RvX29yaWVudGF0aW9uXzEgPSByZXF1aXJlKFwiLi9waG90by1vcmllbnRhdGlvblwiKTtcbmNvbnN0IHBpY3R1cmVfMSA9IHJlcXVpcmUoXCIuL3BpY3R1cmVcIik7XG5jb25zdCB1c2VyID0gbmV3IHVzZXJfMS5Vc2VyKDEsIFwiYWJpZnFcIiwgXCJBYmlcIiwgdHJ1ZSk7XG5jb25zdCBhbGJ1bSA9IG5ldyBhbGJ1bV8xLkFsYnVtKDEwLCBcIlBsYXR6aS1waWN0dXJlc1wiKTtcbmNvbnN0IHBpY3R1cmUgPSBuZXcgcGljdHVyZV8xLlBpY3R1cmUoMSwgXCJDb2RlIGluIG15IGRlc2tcIiwgXCIyMDIyLTAxLTI1XCIsIHBob3RvX29yaWVudGF0aW9uXzEuUGhvdG9PcmllbnRhdGlvbi5MYW5kc2NhcGUpO1xuLy8gY3JlYW1vcyByZWxhY2lvbmVzIGVudHJlIGxvcyBvYmpldG9zXG51c2VyLmFkZEFsYnVtKGFsYnVtKTtcbmFsYnVtLmFkZFBpY3R1cmUocGljdHVyZSk7XG5jb25zb2xlLmxvZyhcIlVzZXI6IFwiLCB1c2VyKTtcbi8vIEVzdGFtb3MgYm9ycmFuZG8gZWwgYWxidW1cbnVzZXIucmVtb3ZlQWxidW0oYWxidW0pO1xuY29uc29sZS5sb2coXCJVU0VSOiBcIiwgdXNlcik7XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJBbGJ1bSIsIml0ZW1fMSIsIkl0ZW0iLCJjb25zdHJ1Y3RvciIsImlkIiwidGl0bGUiLCJzdXBlciIsInRoaXMiLCJwaWN0dXJlIiwiYWRkUGljdHVyZSIsInB1c2giLCJQaG90b09yaWVudGF0aW9uIiwiUGljdHVyZSIsIl9kYXRlIiwiX29yaWVudGF0aW9uIiwidG9TdHJpbmciLCJVc2VyIiwidXNlcm5hbWUiLCJmaXNydE5hbWUiLCJpc1BybyIsImFsYnVtIiwiYWRkQWxidW0iLCJyZW1vdmVBbGJ1bSIsImluZGV4IiwiZmluZEluZGV4IiwiYSIsImRlbGV0ZUFsYnVtIiwic3BsaWNlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsInVzZXJfMSIsImFsYnVtXzEiLCJwaG90b19vcmllbnRhdGlvbl8xIiwicGljdHVyZV8xIiwidXNlciIsIkxhbmRzY2FwZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9
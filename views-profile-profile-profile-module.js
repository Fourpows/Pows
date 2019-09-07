(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profile-profile-profile-module"],{

/***/ "./src/app/views/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"circleBase type3\">\n\n  </div>\n</div>\n  <div class=\"left\"></div>\n  <div class=\" right\"></div>\n<div class=\"brand_logo_container\">\n\t\t<img src=\"../assets/pp .jpeg\" class=\"brand_logo\" alt=\"Logo\">\n</div>\n<div class=\"feeds \">\n<p class=\"health\">health</p>\n<p class=\"pics\">Add Pics</p>\n<p class=\"inbox\">Inbox</p>\n</div>"

/***/ }),

/***/ "./src/app/views/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/profile/profile.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circleBase {\n  border-radius: 50%;\n  margin-left: 38%; }\n\n.type3 {\n  width: 400px;\n  height: 400px;\n  background: #FFCC00;\n  opacity: .2; }\n\n.left {\n  margin-top: -25%;\n  margin-left: 34%;\n  width: 350px;\n  height: 400px;\n  background: #FFCC00;\n  opacity: .2;\n  border-radius: 50%; }\n\n.right {\n  margin-left: 45%;\n  margin-top: -22%;\n  width: 360px;\n  height: 415px;\n  background: #FFCC00;\n  opacity: .2;\n  border-radius: 50%; }\n\n.brand_logo_container {\n  position: absolute;\n  height: 170px;\n  width: 170px;\n  top: 258px;\n  left: 44.2%;\n  border-radius: 50%;\n  background: white;\n  padding: 10px;\n  text-align: center; }\n\n.brand_logo {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 2px solid white; }\n\n.feeds {\n  margin-top: 50%;\n  margin-left: 20%; }\n\np {\n  font-size: 100%; }\n\n.login_btn {\n  margin-top: 10%;\n  width: 50%;\n  margin-left: -60%;\n  background: #c0392b !important;\n  color: white !important; }\n\n.login_btn:focus {\n  box-shadow: none !important;\n  outline: 0px !important; }\n\n.login_container {\n  padding: 0 2rem; }\n\n.input-group-text {\n  background: #c0392b !important;\n  color: white !important;\n  border: 0 !important;\n  border-radius: 0.25rem 0 0 0.25rem !important; }\n\n.input_user,\n.input_pass:focus {\n  box-shadow: none !important;\n  outline: 0px !important; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #c0392b !important; }\n\n.health {\n  margin-top: -50%;\n  margin-left: 18%; }\n\n.pics {\n  margin-left: 33%; }\n\n.inbox {\n  margin-top: -5%;\n  margin-left: 50%; }\n\n@media (max-width: 414px) {\n  .circleBase {\n    border-radius: 50%;\n    margin-left: 5%;\n    padding-left: -10%; }\n  .type3 {\n    width: 400px;\n    height: 400px;\n    background: #FFCC00;\n    opacity: .2; }\n  .left {\n    margin-top: -140%;\n    margin-left: -10%;\n    width: 350px;\n    height: 400px;\n    background: #FFCC00;\n    opacity: .2;\n    border-radius: 50%; }\n  .right {\n    margin-left: 30%;\n    margin-top: -100%;\n    width: 350px;\n    height: 410px;\n    background: #FFCC00;\n    opacity: .2;\n    border-radius: 50%; }\n  .brand_logo_container {\n    position: absolute;\n    height: 170px;\n    width: 170px;\n    top: 230px;\n    left: 35%;\n    border-radius: 50%;\n    background: white;\n    padding: 10px;\n    text-align: center; }\n  .brand_logo {\n    height: 150px;\n    width: 150px;\n    border-radius: 50%;\n    border: 2px solid white; }\n  .feeds {\n    margin-top: 50%;\n    margin-left: 20%; }\n  p {\n    font-size: 200%; }\n  .form_container {\n    margin-top: 100px; }\n  .login_btn {\n    margin-top: 10%;\n    width: 50%;\n    margin-left: -60%;\n    background: #c0392b !important;\n    color: white !important; }\n  .login_btn:focus {\n    box-shadow: none !important;\n    outline: 0px !important; }\n  .login_container {\n    padding: 0 2rem; }\n  .input-group-text {\n    background: #c0392b !important;\n    color: white !important;\n    border: 0 !important;\n    border-radius: 0.25rem 0 0 0.25rem !important; }\n  .input_user,\n  .input_pass:focus {\n    box-shadow: none !important;\n    outline: 0px !important; }\n  .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n    background-color: #c0392b !important; }\n  .health {\n    margin-top: -10%;\n    margin-left: -10%; }\n  .pics {\n    margin-left: 25%; }\n  .inbox {\n    margin-top: -38%;\n    margin-left: 70%; } }\n\n@media (max-width: 375px) {\n  .circleBase {\n    border-radius: 50%;\n    margin-left: 10%; }\n  .type3 {\n    width: 350px;\n    height: 350px;\n    background: #FFCC00;\n    opacity: .2;\n    margin-right: -10%; }\n  .left {\n    margin-top: -135%;\n    margin-left: -10%;\n    width: 350px;\n    height: 350px;\n    background: #FFCC00;\n    opacity: .2;\n    border-radius: 50%; }\n  .right {\n    margin-left: 30%;\n    margin-top: -110%;\n    width: 350px;\n    height: 410px;\n    background: #FFCC00;\n    opacity: .2;\n    border-radius: 50%; }\n  .brand_logo_container {\n    position: absolute;\n    height: 170px;\n    width: 170px;\n    top: 215px;\n    left: 38%;\n    border-radius: 50%;\n    background: white;\n    padding: 10px;\n    text-align: center; }\n  .brand_logo {\n    height: 150px;\n    width: 150px;\n    border-radius: 50%;\n    border: 2px solid white; }\n  .feeds {\n    margin-top: 50%;\n    margin-left: 20%; }\n  p {\n    font-size: 200%; }\n  .form_container {\n    margin-top: 100px; }\n  .login_btn {\n    margin-top: 10%;\n    width: 50%;\n    margin-left: -60%;\n    background: #c0392b !important;\n    color: white !important; }\n  .login_btn:focus {\n    box-shadow: none !important;\n    outline: 0px !important; }\n  .login_container {\n    padding: 0 2rem; }\n  .input-group-text {\n    background: #c0392b !important;\n    color: white !important;\n    border: 0 !important;\n    border-radius: 0.25rem 0 0 0.25rem !important; }\n  .input_user,\n  .input_pass:focus {\n    box-shadow: none !important;\n    outline: 0px !important; }\n  .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n    background-color: #c0392b !important; }\n  .health {\n    margin-top: -15%;\n    margin-left: -25%; }\n  .pics {\n    margin-left: 28%; }\n  .inbox {\n    margin-top: -38%;\n    margin-left: 90%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thaHJhYmEvRGVza3RvcC9wb3dzL3NyYy9hcHAvdmlld3MvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ25CLGlCQUFnQixFQUVsQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLFlBQVcsRUFFZDs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsWUFBVztFQUNYLG1CQUFrQixFQUVyQjs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsWUFBVztFQUNYLG1CQUFrQixFQUduQjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsYUFBWTtFQUNaLFdBQVU7RUFDVixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixjQUFhO0VBQ2IsbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxnQkFBZSxFQUVsQjs7QUFJRDtFQUNJLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQiwrQkFBOEI7RUFDOUIsd0JBQXVCLEVBQzFCOztBQUNEO0VBQ0ksNEJBQTJCO0VBQzNCLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksK0JBQThCO0VBQzlCLHdCQUF1QjtFQUN2QixxQkFBb0I7RUFDcEIsOENBQTZDLEVBQ2hEOztBQUNEOztFQUVJLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBQ0Q7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBQ0Q7RUFFSSxpQkFBZ0I7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aUJBQWdCLEVBQ25CO0VBQ0Q7SUFDSSxpQkFBZ0I7SUFDaEIsaUJBQWdCLEVBQ25CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlQmFzZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgbWFyZ2luLWxlZnQ6IDM4JTtcbiAgIFxufVxuXG4udHlwZTMge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkNDMDA7XG4gICAgb3BhY2l0eTogLjI7XG4gICAgXG59XG4ubGVmdHtcbiAgICBtYXJnaW4tdG9wOiAtMjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAzNCU7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGQ0MwMDtcbiAgICBvcGFjaXR5OiAuMjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbn1cbi5yaWdodHtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgbWFyZ2luLXRvcDogLTIyJTtcbiAgd2lkdGg6IDM2MHB4O1xuICBoZWlnaHQ6IDQxNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZDQzAwO1xuICBvcGFjaXR5OiAuMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBcblxufVxuLmJyYW5kX2xvZ29fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgdG9wOiAyNThweDtcbiAgICBsZWZ0OiA0NC4yJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnJhbmRfbG9nbyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuLmZlZWRze1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xufVxucHtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgXG59XG4uZm9ybV9jb250YWluZXIge1xuICAgIFxufVxuLmxvZ2luX2J0biB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC02MCU7XG4gICAgYmFja2dyb3VuZDogI2MwMzkyYiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmxvZ2luX2J0bjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuLmxvZ2luX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAycmVtO1xufVxuLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG4uaW5wdXRfdXNlcixcbi5pbnB1dF9wYXNzOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG59XG4uaGVhbHRoXG57XG4gICAgbWFyZ2luLXRvcDogLTUwJTtcbiAgICBtYXJnaW4tbGVmdDogMTglO1xuICAgIFxufVxuLnBpY3NcbntcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xufVxuLmluYm94e1xuICAgIG1hcmdpbi10b3A6IC01JTtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xufVxuQG1lZGlhKG1heC13aWR0aCA6IDQxNHB4KVxue1xuICAgIC5jaXJjbGVCYXNlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICBwYWRkaW5nLWxlZnQ6IC0xMCU7XG4gICAgfVxuICAgIFxuICAgIC50eXBlMyB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGQ0MwMDtcbiAgICAgICAgb3BhY2l0eTogLjI7XG4gICAgICAgIFxuICAgIH1cbiAgICAubGVmdHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE0MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkNDMDA7XG4gICAgICAgIG9wYWNpdHk6IC4yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgXG4gICAgfVxuICAgIC5yaWdodHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgICBtYXJnaW4tdG9wOiAtMTAwJTtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgIGhlaWdodDogNDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZDQzAwO1xuICAgICAgb3BhY2l0eTogLjI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBcbiAgICBcbiAgICB9XG4gICAgLmJyYW5kX2xvZ29fY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgIHRvcDogMjMwcHg7XG4gICAgICAgIGxlZnQ6IDM1JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYnJhbmRfbG9nbyB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG4gICAgLmZlZWRze1xuICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5mb3JtX2NvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIH1cbiAgICAubG9naW5fYnRuIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTYwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2MwMzkyYiAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxvZ2luX2J0bjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2dpbl9jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgfVxuICAgIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2MwMzkyYiAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmlucHV0X3VzZXIsXG4gICAgLmlucHV0X3Bhc3M6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaGVhbHRoXG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwJTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5waWNzXG4gICAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIH1cbiAgICAuaW5ib3h7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zOCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aCA6IDM3NXB4KVxue1xuICAgIC5jaXJjbGVCYXNlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgLnR5cGUzIHtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZDQzAwO1xuICAgICAgICBvcGFjaXR5OiAuMjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTAlO1xuICAgICAgICBcbiAgICB9XG4gICAgLmxlZnR7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMzUlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwJTtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZDQzAwO1xuICAgICAgICBvcGFjaXR5OiAuMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIFxuICAgIH1cbiAgICAucmlnaHR7XG4gICAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgICAgbWFyZ2luLXRvcDogLTExMCU7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgICBoZWlnaHQ6IDQxMHB4O1xuICAgICAgYmFja2dyb3VuZDogI0ZGQ0MwMDtcbiAgICAgIG9wYWNpdHk6IC4yO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgXG4gICAgXG4gICAgfVxuICAgIC5icmFuZF9sb2dvX2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICB0b3A6IDIxNXB4O1xuICAgICAgICBsZWZ0OiAzOCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmJyYW5kX2xvZ28ge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgfVxuICAgIC5mZWVkc3tcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIH1cbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgIFxuICAgIH1cbiAgICAuZm9ybV9jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB9XG4gICAgLmxvZ2luX2J0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC02MCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sb2dpbl9idG46Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubG9naW5fY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xuICAgIH1cbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pbnB1dF91c2VyLFxuICAgIC5pbnB1dF9wYXNzOmZvY3VzIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmhlYWx0aFxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNSU7XG4gICAgICAgIFxuICAgIH1cbiAgICAucGljc1xuICAgIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4JTtcbiAgICB9XG4gICAgLmluYm94e1xuICAgICAgICBtYXJnaW4tdG9wOiAtMzglO1xuICAgICAgICBtYXJnaW4tbGVmdDogOTAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.changeState = function () {
        this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/profile/profile.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        backgroundColor: 'green',
                        width: '100px',
                        height: '100px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        backgroundColor: 'red',
                        width: '200px',
                        height: '200px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
                ]),
            ],
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/views/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile/profile-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/profile/profile/profile-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.component */ "./src/app/views/profile/profile.component.ts");




var routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/profile/profile/profile.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/profile/profile/profile.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.component */ "./src/app/views/profile/profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/views/profile/profile/profile-routing.module.ts");





var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileRoutingModule"],
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-profile-profile-profile-module.js.map
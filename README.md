#jasmine-karma-ngmocks

you may get unmet dependency warning if you dont have jasmine-core or phantomjs installed

pull the project down and run `npm install`

the goal in unit testing our frontend code is really to ensure our interfacing code
and logic are what we expect. we want to ensure api requests are made, and we can
mock responses since those aren't really what we are testing.

https://docs.angularjs.org/api/ngMock/service/$httpBackend

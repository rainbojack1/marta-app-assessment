# marta-app-assessment
Simple app to search for and display selected buses

* ## Task

* Create a script that will pull data from a remote source JSON feed, transform it,

* output a different JSON feed matching a specific schema.

* This should execute when running `npm start` and should log output to the console.

* ### Source:

    *     http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus


* ### Output 1:

*  A valid JSON string representing an array with the following properties for each route

         {

            "route": String,
            "lat": String,
            "long": String,
            "timepoint": String

        }


* ### Output 2:

*  Create a Web app that

    1) takes a Marta Bus route as an input

    2) displays buses that are currently on that route in a map

    *  (preference is to use Google Maps but other map providers are also accepted)



* ### Other information and guidelines:

    * - Use the most current LTS node version.

    * - Refer to ItsMarta resources https://www.itsmarta.com/app-developer-resources.aspx and follow their guidelines
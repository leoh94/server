<h1>Technical Guide Document for Project Components</h1>
<p style="font-family:calibri;font-size:150%;"> 
          The server, quizMapper & questionSetter repositories together collaborate to create a location-based quiz with system
          architectural functionality provided through servers and postGreSQL databases. This document is to be used as a technical
          guide for the 3 components that make this system.</p>
          
<h2> NodeJS Server: Server </h2>
          <p style="font-family:calibri;font-size:150%;"> 
                                                        The server repository contains the necessary server-side code to allow the
                                                        processing, upload/download and storage of data between both the web and mobile
                                                        applications and postGreSQL databases (to store spatial data). A HTTPS server
                                                        file is provided in the repository however, due to lacks in certification and
                                                        security, Microsoft Edge does not allow the HTTPS server to carry out location-
                                                        based functions. Therefore the HTTP server file is used for both applications.
                                                        The HTTP code contains GET and POST commands that retrieve or send data from the
                                                        applications. </p>

<h3> Installation Guide </h3>
          <p style="font-family:calibri;font-size:150%;">
          <ul>
          <li>Install this repository via terminal: git clone https://github.com/leoh94/server.git </li>
          <li>Navigate to the server directory via terminal: "~/code/server"</li>
          <li>To run the server, type: "node httpServer.js". To run server in background add ' &' after file name.</li>
          <li>To run the HTTP server, type: "node server.js". To run server in background add ' &' after file name.</li>
          <li>To stop running the servers, type: "fg 1"* followed by "Ctrl+C". 
          <ul><li>*The number after 'fg' is dependent on the number returned inside [] when the server is first ran.</li></ul>
          <li>To run the Phonegap Server, navigate to any phonegap app directory, inside the ucXXXXX folder and type: "phonegap serve
          </li>
          <li>To stop the phonegap server, press Ctrl+C.</li>
          </ul></p>

<h3> Technical Information </h3>
<p style="font-family:calibri;font-size:150%;">
The following port numbers are assigned to each server:
<ul>
          <li>HTTP: 30263</li>
          <li>HTTPS: 31063</li>
          <li>Phonegap: 31263</li>
</ul>
These ports should be placed after the host address within the URL (developer.cege.ucl.ac.uk:XXXXX/).
</p>   
                                                        
<h2> Web Application: Question Setter </h2>
<p style="font-family:calibri;font-size:150%;"> The questionSetter compnent is targeted for use in a web browser, accessible to the administrators of the system. </p>

<h3> Installation Guide </h3>
<p style="font-family:calibri; font-size:150%;">
<ul>
<li>Install this repository via terminal: git clone https://github.com/leoh94/questionSetter.git </li>
<li>Install the server via terminal: git clone https://github.com/leoh94/server.git </li>
<li>Run the HTTP server in background by going to the server directory: "~/code/server" and enter "node httpServer.js &"</li>
<li>Navigate to the questionSetter directory and run the phonegap server: "~/code/questionSetter/uceshus" and enter "phonegap serve"</li>
<li>In one of the specified browsers in the technical information section, go to the following URL: http://developer.cege.ucl.ac.uk:31263/ </li>
<li>The user guide for this app is provided at: http://developer.cege.ucl.ac.uk:31263/userGuide.html </li></ul></p>

<h3> Technical Information </h3>
<p style="font-family:calibri; font-size:150%;"> 
This app was tested on the following browsers:
          <ul>
          <li>Google Chrome v66.0.3359.139 (Official Build) (64-bit)</li>
          <li>Microsoft Edge v41.16299.371.0</li>
          </ul></p>

<h2>Mobile Application: Quiz Mapper </h2>
<p style="font-family:calibri;font-size:150%;">The quizMapper component is targeted for use on an android mobile device, accessible to everyone that can connect to the UCL VPN network. This app is the client-side component and executes the location-based quiz.</p>

<h3> Installation Guide </h3>
<p style="font-family:calibri;font-size:150%;>
<ul>
            <li>Install this repository via terminal: git clone https://github.com/leoh94/quizMapper.git </li>
            <li>Install the server via terminal: git clone https:github.com/leoh94/server.git </li>
            <li>Go to https://build.phonegap.com/apps to create the mobile app.</li>
            <li>Copy and paste the quizMapper repository and create a public application.</li>
            <li>Once built for android, scan the QR code with an external QR reader app on your device to initiate download. </li>
            <li>Install the .apk file and make sure location settings are enabled on you phone. </li>
            <li>Run the HTTP server via terminal: "~/code/server" and enter "node httpServer.js &"</li>
            <li>Navigate to the quizMapper directory and run phonegap server: "~/code/quizMapper/uceshus" and enter "phonegap serve"</li>
            <li>Open the app on your device. User guide is provided at: http://developer.cege.ucl.ac.uk:31263/userGuide.html </li>
</ul>
</p>
<h3> Technical Information </h3>
<p style="font-family:calibri; font-size:150%;"> 
This app was tested on the following browsers:
          <ul>
          <li>Google Chrome v66.0.3359.139 (Official Build) (64-bit)</li>
          <li>Microsoft Edge v41.16299.371.0</li>
          </ul>
And the following mobile operating system:
          Android Marshmallow 6.0.1</p>

            
          
            

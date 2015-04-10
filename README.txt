
  Running an App Engine server

This directory contains the files needed to setup the optional Blockly server.
Although Blockly itself is 100% client-side, the server enables cloud storage
and sharing.  Store your programs in Datastore and get a unique URL that allows
you to load the program on any computer.

To run your own App Engine instance you'll need to create this directory
structure:

default/
 |- app.yaml
 |- index.yaml
 |- index_redirect.py
 |- README.txt
 |- storage.js
 |- storage.py
 |- closure-library/
 `- static/
     |- apps/
     |- blocks/
     |- core/
     |- generators/
     |- media/
     |- msg/
     |- blockly_compressed.js
     |- blockly_uncompressed.js
     |- blocks_compressed.js
     `- python_compressed.js

Finally, upload this directory structure to your App Engine account,
wait a minute, then go to http://YOURNAME.appspot.com/

-public folder : contain html file, formats file: svg, png , jpg ,... ,video

-src
-----/app: folder highest of the app
----------/: store.js : save all state
-----/common: contain assets , components and "hooks use many times"
-------------/assets: contain css files
-------------/components: components only html and css
-------------/hooks : custom hooks hidden complicated logic
-----/config: config app contain : env ,...
-----/features(\*): all main features
------------------/Home
-----------------------/components : only use in this feature
-----------------------/assets: only use in this feature
-----------------------/state: state of the feature
-----------------------/hooks:custom hooks hidden complicated logic
-----/layouts: combine components with feature build 1 own layout
-----/lib: contain apis
-----/routes: all routes
-----/index.js : root file

note : focus write features

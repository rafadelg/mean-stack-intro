#PROCESO PARA TRABAJAR CON JSON (1ª aproximación)
Web del proyecto q describe la especificación: http://www.json.org/

Recursos necesarios para realizar las prácticas con JSON (inicialmente, en la carpeta de trabajo EJEMPLO03-JQUERY)

**a) Servidor JSON** (necesario para q nuestro servidor Node pueda interactuar con él). Pasos (desde la consola del sistema):
1. Ir a nuestra carpeta de trabajo. Ejm (Linux): user@user-pc:~/repo/mean-stack-intro/javascript/ejemplo04-ejercicio03-jquery
2. Ejecutar (como admin): sudo npm install -g json-server. Ver nota **(1)**

**b) Recurso externo JSONPlaceholder** (proporciona una API REST para pruebas), https://jsonplaceholder.typicode.com
Hay q considerar el verbo CRUD a usar y la ruta correspondte para las peticiones (Post, Comments, Albums, Photos, Users)

**c) Recurso propio:** personalizar nuestra API REST (hay q arracar el servidor Json indicándole el recurso)
   Ejm: json-server --watch ejemplo19-jq-ajax-json.json

**(1)** Ejemplo de instalación, salida y comprobación de versión (Linux)
user@user-pc:~/repo/mean-stack-intro/javascript/ejemplo03-jquery$ sudo npm install -g json-server

/usr/bin/json-server -> /usr/lib/node_modules/json-server/bin/index.js
/usr/lib
└─┬ json-server@0.8.22 
  ├─┬ body-parser@1.15.2 
  │ ├── bytes@2.4.0 
  │ ├── content-type@1.0.2 
  │ ├─┬ debug@2.2.0 
  │ │ └── ms@0.7.1 
  │ ├── depd@1.1.0 
  │ ├─┬ http-errors@1.5.0 
  │ │ ├── setprototypeof@1.0.1 
  │ │ └── statuses@1.3.0 
  │ ├── iconv-lite@0.4.13 
  │ ├─┬ on-finished@2.3.0 
  │ │ └── ee-first@1.1.1 
  │ ├── qs@6.2.0 
  │ ├─┬ raw-body@2.1.7 
  │ │ └── unpipe@1.0.0 
  │ └─┬ type-is@1.6.13 
  │   └── media-typer@0.3.0 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.0.0 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├─┬ chokidar@1.6.1 
  │ ├─┬ anymatch@1.3.0 
  │ │ ├── arrify@1.0.1 
  │ │ └─┬ micromatch@2.3.11 
  │ │   ├─┬ arr-diff@2.0.0 
  │ │   │ └── arr-flatten@1.0.1 
  │ │   ├── array-unique@0.2.1 
  │ │   ├─┬ braces@1.8.5 
  │ │   │ ├─┬ expand-range@1.8.2 
  │ │   │ │ └─┬ fill-range@2.2.3 
  │ │   │ │   ├── is-number@2.1.0 
  │ │   │ │   ├── isobject@2.1.0 
  │ │   │ │   ├── randomatic@1.1.5 
  │ │   │ │   └── repeat-string@1.6.1 
  │ │   │ ├── preserve@0.2.0 
  │ │   │ └── repeat-element@1.1.2 
  │ │   ├─┬ expand-brackets@0.1.5 
  │ │   │ └── is-posix-bracket@0.1.1 
  │ │   ├── extglob@0.3.2 
  │ │   ├── filename-regex@2.0.0 
  │ │   ├─┬ kind-of@3.0.4 
  │ │   │ └── is-buffer@1.1.4 
  │ │   ├── normalize-path@2.0.1 
  │ │   ├─┬ object.omit@2.0.1 
  │ │   │ ├─┬ for-own@0.1.4 
  │ │   │ │ └── for-in@0.1.6 
  │ │   │ └── is-extendable@0.1.1 
  │ │   ├─┬ parse-glob@3.0.4 
  │ │   │ ├── glob-base@0.3.0 
  │ │   │ └── is-dotfile@1.0.2 
  │ │   └─┬ regex-cache@0.4.3 
  │ │     ├── is-equal-shallow@0.1.3 
  │ │     └── is-primitive@2.0.0 
  │ ├── async-each@1.0.1 
  │ ├── glob-parent@2.0.0 
  │ ├── inherits@2.0.1 
  │ ├─┬ is-binary-path@1.0.1 
  │ │ └── binary-extensions@1.7.0 
  │ ├─┬ is-glob@2.0.1 
  │ │ └── is-extglob@1.0.0 
  │ ├── path-is-absolute@1.0.1 
  │ └─┬ readdirp@2.1.0 
  │   ├─┬ minimatch@3.0.3 
  │   │ └─┬ brace-expansion@1.1.6 
  │   │   ├── balanced-match@0.4.2 
  │   │   └── concat-map@0.0.1 
  │   ├─┬ readable-stream@2.1.5 
  │   │ ├── buffer-shims@1.0.0 
  │   │ ├── core-util-is@1.0.2 
  │   │ ├── isarray@1.0.0 
  │   │ ├── process-nextick-args@1.0.7 
  │   │ ├── string_decoder@0.10.31 
  │   │ └── util-deprecate@1.0.2 
  │   └── set-immediate-shim@1.0.1 
  ├─┬ compression@1.6.2 
  │ ├─┬ accepts@1.3.3 
  │ │ └── negotiator@0.6.1 
  │ ├── bytes@2.3.0 
  │ ├─┬ compressible@2.0.8 
  │ │ └── mime-db@1.24.0 
  │ ├── on-headers@1.0.1 
  │ └── vary@1.1.0 
  ├── connect-pause@0.1.0 
  ├── cors@2.8.1 
  ├─┬ errorhandler@1.4.3 
  │ └── escape-html@1.0.3 
  ├─┬ express@4.14.0 
  │ ├── array-flatten@1.1.1 
  │ ├── content-disposition@0.5.1 
  │ ├── cookie@0.3.1 
  │ ├── cookie-signature@1.0.6 
  │ ├── encodeurl@1.0.1 
  │ ├── etag@1.7.0 
  │ ├── finalhandler@0.5.0 
  │ ├── fresh@0.3.0 
  │ ├── merge-descriptors@1.0.1 
  │ ├── methods@1.1.2 
  │ ├── parseurl@1.3.1 
  │ ├── path-to-regexp@0.1.7 
  │ ├─┬ proxy-addr@1.1.2 
  │ │ ├── forwarded@0.1.0 
  │ │ └── ipaddr.js@1.1.1 
  │ ├── range-parser@1.2.0 
  │ ├─┬ send@0.14.1 
  │ │ ├── destroy@1.0.4 
  │ │ └── mime@1.3.4 
  │ ├── serve-static@1.11.1 
  │ └── utils-merge@1.0.0 
  ├── lodash@4.16.4 
  ├─┬ lowdb@0.13.1 
  │ ├── graceful-fs@4.1.9 
  │ ├── is-promise@2.1.0 
  │ ├─┬ json-parse-helpfulerror@1.0.3 
  │ │ └── jju@1.3.0 
  │ └── steno@0.4.4 
  ├── method-override@2.3.6 
  ├─┬ morgan@1.7.0 
  │ └── basic-auth@1.0.4 
  ├── node-uuid@1.4.7 
  ├── object-assign@4.1.0 
  ├── pluralize@3.0.0 
  ├─┬ request@2.76.0 
  │ ├── aws-sign2@0.6.0 
  │ ├── aws4@1.5.0 
  │ ├── caseless@0.11.0 
  │ ├─┬ combined-stream@1.0.5 
  │ │ └── delayed-stream@1.0.0 
  │ ├── extend@3.0.0 
  │ ├── forever-agent@0.6.1 
  │ ├─┬ form-data@2.1.1 
  │ │ └── asynckit@0.4.0 
  │ ├─┬ har-validator@2.0.6 
  │ │ ├─┬ commander@2.9.0 
  │ │ │ └── graceful-readlink@1.0.1 
  │ │ ├─┬ is-my-json-valid@2.15.0 
  │ │ │ ├── generate-function@2.0.0 
  │ │ │ ├─┬ generate-object-property@1.2.0 
  │ │ │ │ └── is-property@1.0.2 
  │ │ │ ├── jsonpointer@4.0.0 
  │ │ │ └── xtend@4.0.1 
  │ │ └─┬ pinkie-promise@2.0.1 
  │ │   └── pinkie@2.0.4 
  │ ├─┬ hawk@3.1.3 
  │ │ ├── boom@2.10.1 
  │ │ ├── cryptiles@2.0.5 
  │ │ ├── hoek@2.16.3 
  │ │ └── sntp@1.0.9 
  │ ├─┬ http-signature@1.1.1 
  │ │ ├── assert-plus@0.2.0 
  │ │ ├─┬ jsprim@1.3.1 
  │ │ │ ├── extsprintf@1.0.2 
  │ │ │ ├── json-schema@0.2.3 
  │ │ │ └── verror@1.3.6 
  │ │ └─┬ sshpk@1.10.1 
  │ │   ├── asn1@0.2.3 
  │ │   ├── assert-plus@1.0.0 
  │ │   ├── bcrypt-pbkdf@1.0.0 
  │ │   ├─┬ dashdash@1.14.0 
  │ │   │ └── assert-plus@1.0.0 
  │ │   ├── ecc-jsbn@0.1.1 
  │ │   ├─┬ getpass@0.1.6 
  │ │   │ └── assert-plus@1.0.0 
  │ │   ├── jodid25519@1.0.2 
  │ │   ├── jsbn@0.1.0 
  │ │   └── tweetnacl@0.14.3 
  │ ├── is-typedarray@1.0.0 
  │ ├── isstream@0.1.2 
  │ ├── json-stringify-safe@5.0.1 
  │ ├── mime-types@2.1.12 
  │ ├── oauth-sign@0.8.2 
  │ ├── qs@6.3.0 
  │ ├── stringstream@0.0.5 
  │ ├─┬ tough-cookie@2.3.2 
  │ │ └── punycode@1.4.1 
  │ └── tunnel-agent@0.4.3 
  ├── server-destroy@1.0.1 
  ├── underscore-db@0.10.0 
  ├─┬ update-notifier@1.0.2 
  │ ├─┬ boxen@0.6.0 
  │ │ ├── ansi-align@1.1.0 
  │ │ ├── camelcase@2.1.1 
  │ │ ├── cli-boxes@1.0.0 
  │ │ ├── filled-array@1.1.0 
  │ │ ├─┬ repeating@2.0.1 
  │ │ │ └── is-finite@1.0.2 
  │ │ └── widest-line@1.0.0 
  │ ├─┬ configstore@2.1.0 
  │ │ ├─┬ dot-prop@3.0.0 
  │ │ │ └── is-obj@1.0.1 
  │ │ ├─┬ mkdirp@0.5.1 
  │ │ │ └── minimist@0.0.8 
  │ │ ├── os-tmpdir@1.0.2 
  │ │ ├── osenv@0.1.3 
  │ │ ├── uuid@2.0.3 
  │ │ └─┬ write-file-atomic@1.2.0 
  │ │   ├── imurmurhash@0.1.4 
  │ │   └── slide@1.1.6 
  │ ├── is-npm@1.0.0 
  │ ├─┬ latest-version@2.0.0 
  │ │ └─┬ package-json@2.4.0 
  │ │   ├─┬ got@5.6.0 
  │ │   │ ├─┬ create-error-class@3.0.2 
  │ │   │ │ └── capture-stack-trace@1.0.0 
  │ │   │ ├── duplexer2@0.1.4 
  │ │   │ ├── is-plain-obj@1.1.0 
  │ │   │ ├── is-redirect@1.0.0 
  │ │   │ ├── is-retry-allowed@1.1.0 
  │ │   │ ├── is-stream@1.1.0 
  │ │   │ ├── lowercase-keys@1.0.0 
  │ │   │ ├── node-status-codes@1.0.0 
  │ │   │ ├─┬ parse-json@2.2.0 
  │ │   │ │ └─┬ error-ex@1.3.0 
  │ │   │ │   └── is-arrayish@0.2.1 
  │ │   │ ├── read-all-stream@3.1.0 
  │ │   │ ├── timed-out@2.0.0 
  │ │   │ ├── unzip-response@1.0.1 
  │ │   │ └─┬ url-parse-lax@1.0.0 
  │ │   │   └── prepend-http@1.0.4 
  │ │   ├─┬ registry-auth-token@3.1.0 
  │ │   │ └─┬ rc@1.1.6 
  │ │   │   ├── deep-extend@0.4.1 
  │ │   │   ├── ini@1.3.4 
  │ │   │   ├── minimist@1.2.0 
  │ │   │   └── strip-json-comments@1.0.4 
  │ │   └── registry-url@3.1.0 
  │ ├── lazy-req@1.1.0 
  │ ├─┬ semver-diff@2.1.0 
  │ │ └── semver@5.3.0 
  │ └─┬ xdg-basedir@2.0.0 
  │   └── os-homedir@1.0.2 
  └─┬ yargs@4.8.1 
    ├─┬ cliui@3.2.0 
    │ └── wrap-ansi@2.0.0 
    ├── decamelize@1.2.0 
    ├── get-caller-file@1.0.2 
    ├── lodash.assign@4.2.0 
    ├─┬ os-locale@1.4.0 
    │ └─┬ lcid@1.0.0 
    │   └── invert-kv@1.0.0 
    ├─┬ read-pkg-up@1.0.1 
    │ ├─┬ find-up@1.1.2 
    │ │ └── path-exists@2.1.0 
    │ └─┬ read-pkg@1.1.0 
    │   ├─┬ load-json-file@1.1.0 
    │   │ ├── pify@2.3.0 
    │   │ └─┬ strip-bom@2.0.0 
    │   │   └── is-utf8@0.2.1 
    │   ├─┬ normalize-package-data@2.3.5 
    │   │ ├── hosted-git-info@2.1.5 
    │   │ ├─┬ is-builtin-module@1.0.0 
    │   │ │ └── builtin-modules@1.1.1 
    │   │ └─┬ validate-npm-package-license@3.0.1 
    │   │   ├─┬ spdx-correct@1.0.2 
    │   │   │ └── spdx-license-ids@1.2.2 
    │   │   └── spdx-expression-parse@1.0.4 
    │   └── path-type@1.1.0 
    ├── require-directory@2.1.1 
    ├── require-main-filename@1.0.1 
    ├── set-blocking@2.0.0 
    ├─┬ string-width@1.0.2 
    │ ├─┬ code-point-at@1.0.1 
    │ │ └── number-is-nan@1.0.1 
    │ └── is-fullwidth-code-point@1.0.0 
    ├── which-module@1.0.0 
    ├── window-size@0.2.0 
    ├── y18n@3.2.1 
    └─┬ yargs-parser@2.4.1 
      └── camelcase@3.0.0 

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules/json-server/node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.14: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

user@user-pc:~/repo/mean-stack-intro/javascript/ejemplo03-jquery$ json-server -version
0.8.22
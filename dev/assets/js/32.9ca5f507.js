(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{394:function(e,t,n){"use strict";n.r(t);var i={mounted(){const e=document.querySelector("esp-web-install-button"),t=document.getElementById("erase");e.addEventListener("state-changed",e=>{console.log(e.detail)});const n=document.querySelector("select");e.manifest=n.value,n.addEventListener("change",()=>{e.manifest=n.value}),t.addEventListener("change",n=>{t.checked?e.setAttribute("erase-first",""):e.removeAttribute("erase-first")})}},a=n(14),s=Object(a.a)(i,(function(){var e=this._self._c;return e("div",{attrs:{align:"center"}},[this._m(0),e("br"),e("br"),this._v(" "),e("input",{attrs:{type:"checkbox",id:"erase",checked:""}}),this._v(" "),e("label",{attrs:{for:"erase"}},[this._v(" Erase Flash (erases all saved data)")]),e("br"),e("br"),this._v(" "),e("esp-web-install-button",{attrs:{"erase-first":""}})],1)}),[function(){var e=this,t=e._self._c;return t("select",[t("optgroup",{attrs:{label:"ESP32"}},[t("option",{attrs:{value:"/dev/firmware_build/esp32-m5stick-c-ble.manifest.json"}},[e._v("\n      esp32-m5stick-c-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-m5stick-cp-ble.manifest.json"}},[e._v("\n      esp32-m5stick-cp-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-olimex-gtw-ble-wifi.manifest.json"}},[e._v("\n      esp32-olimex-gtw-ble-wifi\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/lilygo-rtl_433.manifest.json"}},[e._v("\n      lilygo-rtl_433\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-olimex-gtw-ble-poe-iso.manifest.json"}},[e._v("\n      esp32-olimex-gtw-ble-poe-iso\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/ttgo-lora32-v1-915.manifest.json"}},[e._v("\n      ttgo-lora32-v1-915\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-m5atom-lite.manifest.json"}},[e._v("\n      esp32-m5atom-lite\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/heltec-wifi-lora-32-915.manifest.json"}},[e._v("\n      heltec-wifi-lora-32-915\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-weatherstation.manifest.json"}},[e._v("\n      esp32dev-weatherstation\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32c3-dev-c2-ble.manifest.json"}},[e._v("\n      esp32c3-dev-c2-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/heltec-rtl_433.manifest.json"}},[e._v("\n      heltec-rtl_433\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-pilight-somfy-cc1101.manifest.json"}},[e._v("\n      esp32dev-pilight-somfy-cc1101\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-lolin32lite-ble.manifest.json"}},[e._v("\n      esp32-lolin32lite-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-ble-openhab.manifest.json"}},[e._v("\n      esp32dev-ble-openhab\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-m5tough-ble.manifest.json"}},[e._v("\n      esp32-m5tough-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-ir.manifest.json"}},[e._v("\n      esp32dev-ir\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-rtl_433.manifest.json"}},[e._v("\n      esp32dev-rtl_433\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-somfy-cc1101.manifest.json"}},[e._v("\n      esp32dev-somfy-cc1101\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/ttgo-lora32-v1-868.manifest.json"}},[e._v("\n      ttgo-lora32-v1-868\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-pilight-cc1101.manifest.json"}},[e._v("\n      esp32dev-pilight-cc1101\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32doitv1-aithinker-r01-sx1278.manifest.json"}},[e._v("\n      esp32doitv1-aithinker-r01-sx1278\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-multi_receiver.manifest.json"}},[e._v("\n      esp32dev-multi_receiver\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32s3-dev-c1-ble.manifest.json"}},[e._v("\n      esp32s3-dev-c1-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/shelly-plus1.manifest.json"}},[e._v("\n      shelly-plus1\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-ble-datatest.manifest.json"}},[e._v("\n      esp32dev-ble-datatest\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32c3-dev-m1-ble.manifest.json"}},[e._v("\n      esp32c3-dev-m1-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-m5atom-matrix.manifest.json"}},[e._v("\n      esp32-m5atom-matrix\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/thingpulse-espgateway.manifest.json"}},[e._v("\n      thingpulse-espgateway\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-ble-aws.manifest.json"}},[e._v("\n      esp32dev-ble-aws\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-m5stick-ble.manifest.json"}},[e._v("\n      esp32-m5stick-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-rf.manifest.json"}},[e._v("\n      esp32dev-rf\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-ble.manifest.json"}},[e._v("\n      esp32dev-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/ttgo-t-beam.manifest.json"}},[e._v("\n      ttgo-t-beam\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32feather-ble.manifest.json"}},[e._v("\n      esp32feather-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-m5stack-ble.manifest.json"}},[e._v("\n      esp32-m5stack-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-olimex-gtw-ble-poe.manifest.json"}},[e._v("\n      esp32-olimex-gtw-ble-poe\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-wt32-eth01-ble-eth.manifest.json"}},[e._v("\n      esp32-wt32-eth01-ble-eth\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-gf-sun-inverter.manifest.json"}},[e._v("\n      esp32dev-gf-sun-inverter\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32-olimex-gtw-ble-eth.manifest.json"}},[e._v("\n      esp32-olimex-gtw-ble-eth\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/heltec-wifi-lora-32-868.manifest.json"}},[e._v("\n      heltec-wifi-lora-32-868\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/heltec-ble.manifest.json"}},[e._v("\n      heltec-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/airm2m_core_esp32c3.manifest.json"}},[e._v("\n      airm2m_core_esp32c3\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/thingpulse-espgateway-ethernet.manifest.json"}},[e._v("\n      thingpulse-espgateway-ethernet\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/lilygo-ble.manifest.json"}},[e._v("\n      lilygo-ble\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32c3-dev-c2-ble-no-serial.manifest.json"}},[e._v("\n      esp32c3-dev-c2-ble-no-serial\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-ble-mqtt-undecoded.manifest.json"}},[e._v("\n      esp32dev-ble-mqtt-undecoded\n      ")]),e._v(" "),t("option",{attrs:{value:"/dev/firmware_build/esp32dev-pilight.manifest.json"}},[e._v("\n      esp32dev-pilight\n      ")])]),e._v(" "),t("optgroup",{attrs:{label:"ESP8266"}},[e._v("/dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/nodemcuv2-ir.manifest.json"}},[e._v("\n      nodemcuv2-ir\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/rfbridge-direct.manifest.json"}},[e._v("\n      rfbridge-direct\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/nodemcuv2-rf2-cc1101.manifest.json"}},[e._v("\n      nodemcuv2-rf2-cc1101\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/nodemcuv2-somfy-cc1101.manifest.json"}},[e._v("\n      nodemcuv2-somfy-cc1101\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/nodemcuv2-pilight.manifest.json"}},[e._v("\n      nodemcuv2-pilight\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/nodemcuv2-2g.manifest.json"}},[e._v("\n      nodemcuv2-2g\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/nodemcuv2-rs232.manifest.json"}},[e._v("\n      nodemcuv2-rs232\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/nodemcuv2-weatherstation.manifest.json"}},[e._v("\n      nodemcuv2-weatherstation\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/sonoff-basic-rfr3.manifest.json"}},[e._v("\n      sonoff-basic-rfr3\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/rf-wifi-gateway.manifest.json"}},[e._v("\n      rf-wifi-gateway\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/nodemcuv2-rf2.manifest.json"}},[e._v("\n      nodemcuv2-rf2\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/nodemcuv2-rf-cc1101.manifest.json"}},[e._v("\n      nodemcuv2-rf-cc1101\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/nodemcuv2-rf.manifest.json"}},[e._v("\n      nodemcuv2-rf\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/rfbridge.manifest.json"}},[e._v("\n      rfbridge\n      ")]),e._v("\n      /dev/firmware_build/\n      "),t("option",{attrs:{value:"/dev/firmware_build/sonoff-basic.manifest.json"}},[e._v("\n      sonoff-basic\n      ")])])])}],!1,null,null,null);t.default=s.exports}}]);
function applyFocusVisiblePolyfill(e){function t(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function n(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!L[t]||e.readOnly)||("TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable)}function o(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),"input"==e.tagName.toLowerCase()&&e.parentNode.classList.add("focus-visible"),"label"==e.parentNode.tagName.toLowerCase()&&e.parentNode.classList.add("focus-visible"),e.classList.contains("notify__close")&&e.parentNode.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function i(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.parentNode&&(e.parentNode.classList.remove("focus-visible"),e.parentNode.parentNode&&e.parentNode.parentNode.classList.remove("focus-visible")),e.removeAttribute("data-focus-visible-added"))}function s(n){n.metaKey||n.altKey||n.ctrlKey||(t(e.activeElement)&&o(e.activeElement),v=!0)}function d(e){v=!1}function a(e){t(e.target)&&(v||n(e.target))&&o(e.target)}function u(e){t(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(f=!0,window.clearTimeout(E),E=window.setTimeout(function(){f=!1},100),i(e.target))}function c(e){"hidden"===document.visibilityState&&(f&&(v=!0),r())}function r(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function m(){document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(v=!1,m())}var v=!0,f=!1,E=null,L={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};document.addEventListener("keydown",s,!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",c,!0),r(),e.addEventListener("focus",a,!0),e.addEventListener("blur",u,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var event;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{event=new CustomEvent("focus-visible-polyfill-ready")}catch(e){event=document.createEvent("CustomEvent"),event.initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(event)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document);
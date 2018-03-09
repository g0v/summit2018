import FaIcon from 'vue-awesome/components/Icon.vue'

// All available icons: https://fontawesome.com/v4.7.0/icons/#

// CTA
import 'vue-awesome/icons/envelope'

// Timeline
import 'vue-awesome/icons/globe' // or 'bullhorn'
import 'vue-awesome/icons/ticket'
import 'vue-awesome/icons/calendar-check-o'

// Speakers
import 'vue-awesome/icons/youtube-play'

// Footer
import 'vue-awesome/icons/github'
import 'vue-awesome/icons/twitter'
import 'vue-awesome/icons/facebook'
import 'vue-awesome/icons/slack'

// Sponsors
import 'vue-awesome/icons/external-link'
import 'vue-awesome/icons/caret-down'

/* g0v logo ('g0v'). Source: https://github.com/g0v/style-guide/blob/gh-pages/logo/svg/g0v-only.svg */
FaIcon.register({
  'g0v': {
    width: 800,
    height: 400,
    raw: `
      <g transform="translate(103.000000, 76.000000)">
        <path d="M87.638,91.234c30.383,0,51.979,4.468,67.468,10.426V76.638C142,72.468,121.298,68,88.234,68C46.085,68,25.979,76.489,16,86.468C6.766,95.702,2,108.064,2,124s4.766,28.298,14,37.532C26.128,171.809,45.787,180,86.894,180c32.915,0,53.17-4.617,65.681-17.128C159.426,156.021,163,146.34,163,129.66v-13.851H71.255v20.851h64.34c0.149,2.383,0.149,7.894-3.574,11.617c-6.702,6.702-23.234,8.936-45.128,8.936c-26.809,0-40.809-4.915-47.362-11.468c-4.766-4.915-7.298-11.915-7.298-21.745c0-9.532,2.681-16.979,7.894-22.191C45.936,96,60.085,91.234,87.638,91.234C87.638,91.234,60.085,91.234,87.638,91.234L87.638,91.234L87.638,91.234z" />
        <path d="M600,72h-34.145l-54.69,81.863L456.623,72H421l71.393,104h36.214l0,0L600,72L600,72z" />
        <path fill="#C60000" d="M412,0h-29.622L189,247h30.069L412,0z" />
        <path d="M368.145,86.766C358.417,76.936,339.697,68,298.574,68c-39.65,0-59.843,8.787-69.718,18.766C219.864,95.851,215,107.17,215,124s4.864,28,13.855,37.085c9.728,9.83,29.332,18.915,69.718,18.915s59.843-8.936,69.571-18.766C377.136,152.149,382,140.83,382,124C382,107.021,377.136,95.851,368.145,86.766z M298.573,156c-26.347,0-39.96-5.451-45.815-11.344C248.22,140.089,245,134.196,245,123s2.781-17.237,7.611-22.098C258.613,94.862,272.226,90,298.573,90s39.521,5.009,45.669,11.196C349.073,106.058,352,111.804,352,123s-2.781,17.237-7.611,22.098C338.241,151.286,324.921,156,298.573,156z" />
      </g>
    `
  }
})

/* g0v logo ('0') */
FaIcon.register({
  'g0v-logo': {
    width: 300,
    height: 300,
    raw: `
        <g transform="translate(-150 50)">
          <path fill="#C60000" d="M412,0h-29.622L189,247h30.069L412,0z"></path>
          <path d="M368.145,86.766C358.417,76.936,339.697,68,298.574,68c-39.65,0-59.843,8.787-69.718,18.766C219.864,95.851,215,107.17,215,124s4.864,28,13.855,37.085c9.728,9.83,29.332,18.915,69.718,18.915s59.843-8.936,69.571-18.766C377.136,152.149,382,140.83,382,124C382,107.021,377.136,95.851,368.145,86.766z M298.573,156c-26.347,0-39.96-5.451-45.815-11.344C248.22,140.089,245,134.196,245,123s2.781-17.237,7.611-22.098C258.613,94.862,272.226,90,298.573,90s39.521,5.009,45.669,11.196C349.073,106.058,352,111.804,352,123s-2.781,17.237-7.611,22.098C338.241,151.286,324.921,156,298.573,156z"></path>
        </g>
      `
  }
})

/* Hackfoldr logl. Source: https://github.com/hackfoldr/hackfoldr/blob/b3c0cb2bcbda030a5a0c30b470abd10d7a524d0d/app/assets/img/hackfoldr.svg */
FaIcon.register({
  hackfoldr: {
    width: 100,
    height: 90,
    raw: `
      <path d="M 10.599155,23.750535 V 80.171143 H 2.7062958 C 1.2135422,80.171143 0,78.88492 0,77.276818 V 4.4714037 C 0,2.0088353 1.7163645,0 4.0757613,0 H 38.95543 c 2.349727,0 4.075761,1.9984938 4.075761,4.4623549 v 4.2762079 h 53.928897 c 1.500006,0 2.705087,1.2939792 2.705087,2.8839842 V 27.995718 H 53.630346 v -4.285256 c 0,-2.457398 -1.716364,-4.461063 -4.084222,-4.461063 H 14.682168 c -2.367857,-0.0013 -4.083013,2.029519 -4.083013,4.501136 z" id="path3035" inkscape:connector-curvature="0"/>
      <g xfill:#000000; transform="matrix(0.96557167,0,0,0.92647717,13.767761,14.044843)" style="font-size:85.06543732px;font-style:normal;font-weight:normal;line-height:125%;letter-spacing:0px;word-spacing:0px;fill-opacity:1;stroke:none;font-family:Sans" id="text3047">
        <path d="m 70.909065,44.060013 c -5.8e-5,4.873559 -1.398431,8.985605 -4.195122,12.336149 -2.769108,3.322877 -6.078128,4.98431 -9.92707,4.984303 -2.713717,7e-6 -5.205866,-0.83071 -7.476454,-2.492151 -2.270661,-1.689115 -4.333607,-4.195109 -6.188843,-7.51799 -1.550701,3.405953 -3.433658,5.925792 -5.648877,7.559526 -2.215268,1.60606 -4.6105,2.409086 -7.185703,2.40908 -4.125909,6e-6 -7.504155,-1.578355 -10.13475,-4.735088 -2.602918,-3.184402 -3.904374,-7.351829 -3.904371,-12.502294 -3e-6,-5.011965 1.39837,-9.151701 4.195122,-12.419221 2.796738,-3.267449 6.105758,-4.901191 9.92707,-4.901231 2.685966,4e-5 5.150424,0.816911 7.393383,2.450615 2.2706,1.633781 4.361236,4.15362 6.271915,7.559526 1.467567,-3.295144 3.308989,-5.773447 5.524269,-7.434918 2.242897,-1.689085 4.679665,-2.533647 7.310311,-2.533687 4.153538,4e-5 7.531784,1.592246 10.134749,4.776623 2.602857,3.184449 3.904313,7.33803 3.904371,12.460758 m -3.572084,0.124607 c -5.4e-5,-3.101317 -0.927688,-5.565776 -2.782903,-7.393383 -1.827627,-1.827545 -4.236704,-2.741333 -7.227239,-2.741366 -2.796789,3.3e-5 -5.205866,0.456927 -7.227239,1.370683 -2.021447,0.91382 -3.558272,2.270657 -4.61048,4.070514 2.15983,5.122779 4.153549,8.819467 5.981163,11.090074 1.855228,2.270642 4.208924,3.405954 7.061096,3.405941 2.741318,1.3e-5 4.887336,-0.92762 6.438058,-2.782903 1.578309,-1.85525 2.36749,-4.195101 2.367544,-7.01956 m -25.66916,4.485873 C 39.480239,43.436999 37.444984,39.712621 35.562049,37.497347 33.706761,35.282133 31.3946,34.174512 28.625561,34.174478 c -2.741379,3.4e-5 -4.901242,0.927667 -6.479594,2.782903 -1.550679,1.855297 -2.326014,4.167457 -2.326008,6.936488 -6e-6,3.129055 0.927627,5.621204 2.782903,7.476455 1.855257,1.827592 4.264334,2.74138 7.227239,2.741366 2.685966,1.4e-5 5.081198,-0.470726 7.185704,-1.412219 2.104457,-0.941464 3.655127,-2.284455 4.652016,-4.028978" style="font-variant:normal;font-stretch:normal;text-align:start;line-height:125%;writing-mode:lr-tb;text-anchor:start;font-family:Georgia;-inkscape-font-specification:Georgia" id="path3052" inkscape:connector-curvature="0" />
      </g>
    `
  }
})

export default FaIcon

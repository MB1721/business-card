import React from 'react';
import './Contact.css';
import envelopeIco from '@images/icons/envelope.svg';

export default function Contact() {
  return (
    <div className="contact">
      <a className="link email">
        <figure className="contact-icon">
          <svg
            id="email"
            viewBox="0 0 23.4375 16.875"
            width="500"
            height="360"
            version="1.1"
            sodipodiDocname="envelope.svg"
            inkscapeVersion="1.2.2 (732a01da63, 2022-12-09)"
            xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsSvg="http://www.w3.org/2000/svg">
            <defs
              id="defs9" />
            <sodipodiNamedview
              id="namedview7"
              pagecolor="#ffffff"
              bordercolor="#000000"
              borderopacity="0.25"
              inkscapeShowpageshadow="2"
              inkscapePageopacity="0.0"
              inkscapePagecheckerboard="0"
              inkscapeDeskcolor="#d1d1d1"
              showgrid="false"
              inkscapeZoom="0.57906046"
              inkscapeCx="285.80781"
              inkscapeCy="124.33935"
              inkscapeWindow-width="1920"
              inkscapeWindow-height="1080"
              inkscapeWindow-x="0"
              inkscapeWindow-y="0"
              inkscapeWindow-maximized="0"
              inkscapeCurrent-layer="Filled" />
            <path
              d="m 23.392577,3.4839204 -8.220703,6.4569888 a 4.8896484,3.8405965 0 0 1 -6.9062488,0 L 0.04492187,3.4839204 C 0.03125,3.6051135 0,3.7148011 0,3.8352272 V 13.039773 A 4.8886718,3.8398295 0 0 0 4.8828124,16.875 H 18.554687 A 4.8886718,3.8398295 0 0 0 23.4375,13.039773 V 3.8352272 c 0,-0.1204261 -0.03125,-0.2301137 -0.04492,-0.3513068 z"
              id="path2"
              />
            <path
              d="M 13.791016,8.8563067 22.710937,1.8493466 A 4.8691404,3.8244885 0 0 0 18.554687,0 H 4.8828124 A 4.8691404,3.8244885 0 0 0 0.72656248,1.8493466 L 9.6464841,8.8563067 a 2.9365234,2.3065057 0 0 0 4.1445319,0 z"
              id="path4"
              />
          </svg>
        </figure>
        <p>Email</p>
      </a>
      <a className="link linkedin">
        <figure className="contact-icon">
          <svg
            version="1.1"
            id="linkedin"
            x="0px"
            y="0px"
            viewBox="0 0 23.4375 16.875"
            xmlSpace="preserve"
            width="500"
            height="360"
            sodipodiDocname="linkedin.svg"
            inkscapeVersion="1.2.2 (732a01da63, 2022-12-09)"
            xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsSvg="http://www.w3.org/2000/svg">
            <defs
            id="defs300" /><sodipodiNamedview
            id="namedview298"
            pagecolor="#ffffff"
            bordercolor="#000000"
            borderopacity="0.25"
            inkscapeShowpageshadow="2"
            inkscapePageopacity="0.0"
            inkscapePagecheckerboard="0"
            inkscapeDeskcolor="#d1d1d1"
            showgrid="false"
            inkscapeZoom="0.4609375"
            inkscapeCx="265.76271"
            inkscapeCy="323.25424"
            inkscapeWindow-width="1920"
            inkscapeWindow-height="1080"
            inkscapeWindow-x="0"
            inkscapeWindow-y="0"
            inkscapeWindow-maximized="0"
            inkscapeCurrent-layer="Capa_1" />
            <g
              id="g295"
              transform="matrix(0.97655935,0,0,0.82574003,0,-1.471356)">
              <path
              id="Path_2525"
              d="m 23.002,21.584 h 0.227 l -0.435,-0.658 v 0 c 0.266,0 0.407,-0.169 0.409,-0.376 0,-0.008 0,-0.017 -10e-4,-0.025 0,-0.282 -0.17,-0.417 -0.519,-0.417 h -0.564 v 1.476 h 0.212 v -0.643 h 0.261 z m -0.425,-0.81 h -0.246 v -0.499 h 0.312 c 0.161,0 0.345,0.026 0.345,0.237 0,0.242 -0.186,0.262 -0.412,0.262" />
              <path
              id="Path_2520"
              d="m 17.291,19.073 h -3.007 v -4.709 c 0,-1.123 -0.02,-2.568 -1.564,-2.568 -1.566,0 -1.806,1.223 -1.806,2.487 v 4.79 H 7.908 V 9.389 h 2.887 v 1.323 h 0.04 c 0.589,-1.006 1.683,-1.607 2.848,-1.564 3.048,0 3.609,2.005 3.609,4.612 z M 4.515,8.065 C 3.551,8.065 2.77,7.284 2.77,6.32 c 0,-0.964 0.781,-1.745 1.745,-1.745 0.964,0 1.745,0.781 1.745,1.745 0,0.964 -0.781,1.745 -1.745,1.745 v 0 M 6.018,19.073 H 3.008 V 9.389 h 3.01 z M 18.79,1.783 H 1.497 C 0.68,1.774 0.01,2.429 0,3.246 V 20.61 c 0.01,0.818 0.68,1.473 1.497,1.464 H 18.79 c 0.819,0.01 1.492,-0.645 1.503,-1.464 V 3.245 C 20.281,2.426 19.608,1.771 18.79,1.782" />
              <path
              id="Path_2526"
              d="m 22.603,19.451 c -0.764,0.007 -1.378,0.633 -1.37,1.397 0.007,0.764 0.633,1.378 1.397,1.37 0.764,-0.007 1.378,-0.633 1.37,-1.397 -0.007,-0.754 -0.617,-1.363 -1.37,-1.37 h -0.027 m 0.032,2.608 c -0.67,0.011 -1.254,-0.522 -1.265,-1.192 -0.011,-0.67 0.523,-1.222 1.193,-1.233 0.67,-0.011 1.222,0.523 1.233,1.193 0,0.007 0,0.013 0,0.02 0.014,0.655 -0.506,1.198 -1.161,1.212 h -0.031" />
            </g>
          </svg>
        </figure>
        <p>LinkedIn</p>
      </a>
    </div>
  );
}
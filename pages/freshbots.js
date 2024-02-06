import React, { useEffect } from 'react';

const FreshbotsScript = () => {
  useEffect(() => {
    (function (d, w, c) {
      if (!d.getElementById("spd-busns-spt")) {
        var n = d.getElementsByTagName('script')[0], s = d.createElement('script');
        var loaded = false;
        s.id = "spd-busns-spt";
        s.async = "async";
        s.setAttribute("data-self-init", "false");
        s.setAttribute("data-init-type", "opt");
        s.src = 'https://cdn.in-freshbots.ai/assets/share/js/freshbots.min.js';
        s.setAttribute("data-client", "b9fd233033f7addee63f620ca6066017641adb2c");
        s.setAttribute("data-bot-hash", "0634cb47cfb410c47c8a6660be1fda61bfb539bf");
        s.setAttribute("data-env", "prod");
        s.setAttribute("data-region", "in");

        if (c) {
          s.onreadystatechange = s.onload = function () {
            if (!loaded) { c(); }
            loaded = true;
          };
        }

        n.parentNode.insertBefore(s, n);
      }
    })(document, window, function () {
      // Additional initialization logic if needed
    });
  }, []);

  return null;
};

export default FreshbotsScript;

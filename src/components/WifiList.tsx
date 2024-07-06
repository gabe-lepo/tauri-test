import "../main.css";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import CardTitle from "./CardTitle";

function WifiList() {
   const [name, setName] = useState<string>("<you>");
   const [result, setResult] = useState<string>("");

   const fetchData = async () => {
      try {
         const resp = await invoke<string>('hello_world', { name });
         setResult(resp);
      } catch (err) {
         console.error(`Error: `, (err));
      }
   };

   useEffect(() => {
      fetchData();
   }, [name]);

   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
   }

   return(
      <>
         <CardTitle title="Wifi List" subtitle="WIP" />
         <div>
            <input
               type="text"
               placeholder="Enter your name"
               autoCapitalize="false"
               autoComplete="false"
               autoCorrect="false"
               onChange={handleNameChange}
            />
         </div>
         <p>{result}</p>
      </>
   );
}

export default WifiList;

// system_profiler SPAirPortDataType

// Wi-Fi:

//       Software Versions:
//           CoreWLAN: 16.0 (1657)
//           CoreWLANKit: 16.0 (1657)
//           Menu Extra: 17.0 (1728)
//           System Information: 15.0 (1502)
//           IO80211 Family: 12.0 (1200.13.0)
//           Diagnostics: 11.0 (1163)
//           AirPort Utility: 6.3.9 (639.23)
//       Interfaces:
//         en0:
//           Card Type: Wi-Fi  (0x14E4, 0x4378)
//           Firmware Version: wl0: Jan 13 2024 03:06:59 version 18.20.440.9.7.8.167 FWID 01-7be24857
//           MAC Address: a0:78:17:a3:ed:23
//           Locale: FCC
//           Country Code: US
//           Supported PHY Modes: 802.11 a/b/g/n/ac/ax
//           Supported Channels: 1 (2GHz), 2 (2GHz), 3 (2GHz), 4 (2GHz), 5 (2GHz), 6 (2GHz), 7 (2GHz), 8 (2GHz), 9 (2GHz), 10 (2GHz), 11 (2GHz), 12 (2GHz), 13 (2GHz), 36 (5GHz), 40 (5GHz), 44 (5GHz), 48 (5GHz), 52 (5GHz), 56 (5GHz), 60 (5GHz), 64 (5GHz), 100 (5GHz), 104 (5GHz), 108 (5GHz), 112 (5GHz), 116 (5GHz), 120 (5GHz), 124 (5GHz), 128 (5GHz), 132 (5GHz), 136 (5GHz), 140 (5GHz), 144 (5GHz), 149 (5GHz), 153 (5GHz), 157 (5GHz), 161 (5GHz), 165 (5GHz)
//           Wake On Wireless: Supported
//           AirDrop: Supported
//           Auto Unlock: Supported
//           Status: Connected
//           Current Network Information:
//             G-HOME:
//               PHY Mode: 802.11ax
//               Channel: 64 (5GHz, 80MHz)
//               Country Code: US
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -53 dBm / -90 dBm
//               Transmit Rate: 206
//               MCS Index: 8
//           Other Local Wi-Fi Networks:
//             606YarnFactory:
//               PHY Mode: 802.11
//               Channel: 11 (2GHz, 20MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -79 dBm / -82 dBm
//             Cesare Wifi ?:
//               PHY Mode: 802.11
//               Channel: 11 (2GHz, 20MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -53 dBm / -82 dBm
//             Cesare Wifi ?:
//               PHY Mode: 802.11
//               Channel: 161 (5GHz, 80MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -67 dBm / -91 dBm
//             DIRECT-9C-HP DeskJet 2600 series:
//               PHY Mode: 802.11
//               Channel: 6 (2GHz, 20MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -76 dBm / -80 dBm
//             Fios-h5FyK:
//               PHY Mode: 802.11
//               Channel: 1 (2GHz, 20MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -65 dBm / -81 dBm
//             Fios-h5FyK:
//               PHY Mode: 802.11
//               Channel: 60 (5GHz, 80MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -81 dBm / -91 dBm
//             Fios-h5FyK:
//               PHY Mode: 802.11
//               Channel: 132 (5GHz, 80MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -84 dBm / -91 dBm
//             G-HOME:
//               PHY Mode: 802.11
//               Channel: 1 (2GHz, 20MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -40 dBm / -81 dBm
//             G-HOME:
//               PHY Mode: 802.11
//               Channel: 64 (5GHz, 80MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -50 dBm / -91 dBm
//             GAARA V. ROCK LEE:
//               PHY Mode: 802.11
//               Channel: 6 (2GHz, 20MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -71 dBm / -81 dBm
//             Router?  I hardly know her!:
//               PHY Mode: 802.11
//               Channel: 11 (2GHz, 20MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -49 dBm / -80 dBm
//             Router?  I hardly know her!:
//               PHY Mode: 802.11
//               Channel: 120 (5GHz, 80MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -74 dBm / -91 dBm
//             Verizon_6V3KPZ:
//               PHY Mode: 802.11
//               Channel: 100 (5GHz, 80MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -80 dBm / -91 dBm
//             Verizon_6V3KPZ:
//               PHY Mode: 802.11
//               Channel: 1 (2GHz, 20MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -67 dBm / -81 dBm
//             Verizon_L7ZQ6V:
//               PHY Mode: 802.11
//               Channel: 1 (2GHz, 40MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -61 dBm / -81 dBm
//             Verizon_L7ZQ6V:
//               PHY Mode: 802.11
//               Channel: 104 (5GHz, 80MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -77 dBm / -91 dBm
//             Verizon_QJ9PQ4:
//               PHY Mode: 802.11
//               Channel: 11 (2GHz, 20MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -63 dBm / -82 dBm
//             Verizon_QJ9PQ4:
//               PHY Mode: 802.11
//               Channel: 104 (5GHz, 80MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -71 dBm / -91 dBm
//             Verizon_VYZVS4:
//               PHY Mode: 802.11
//               Channel: 6 (2GHz, 20MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -68 dBm / -80 dBm
//             Verizon_VYZVS4:
//               PHY Mode: 802.11
//               Channel: 112 (5GHz, 80MHz)
//               Network Type: Infrastructure
//               Security: WPA2 Personal
//               Signal / Noise: -88 dBm / -91 dBm
//         awdl0:
//           MAC Address: 56:5e:fb:2c:37:7d
//           Supported Channels: 1 (2GHz), 2 (2GHz), 3 (2GHz), 4 (2GHz), 5 (2GHz), 6 (2GHz), 7 (2GHz), 8 (2GHz), 9 (2GHz), 10 (2GHz), 11 (2GHz), 12 (2GHz), 13 (2GHz), 36 (5GHz), 40 (5GHz), 44 (5GHz), 48 (5GHz), 52 (5GHz), 56 (5GHz), 60 (5GHz), 64 (5GHz), 100 (5GHz), 104 (5GHz), 108 (5GHz), 112 (5GHz), 116 (5GHz), 120 (5GHz), 124 (5GHz), 128 (5GHz), 132 (5GHz), 136 (5GHz), 140 (5GHz), 144 (5GHz), 149 (5GHz), 153 (5GHz), 157 (5GHz), 161 (5GHz), 165 (5GHz)
//           Current Network Information:
//               Network Type: Infrastructure
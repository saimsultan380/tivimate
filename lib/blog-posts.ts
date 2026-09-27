import { routes } from "@/lib/site";

export const blogSlugs = {
  addPlaylist: "how-to-add-playlist-to-tivimate",
  premiumVsFree: "tivimate-premium-vs-tivimate-free",
  firestickInstall: "how-to-download-or-install-tivimate-on-firestick",
  stalkerErrors: "tivimate-errors-stalker-portal-and-multiple-screen-issues",
} as const;

export function blogPostPath(slug: string): string {
  return `${routes.blog}/${slug}`;
}

export type BlogTextPart = string | { label: string; href: string };

export type BlogContentBlock =
  | { type: "p"; text: string }
  | { type: "p"; parts: BlogTextPart[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
    }
  | {
      type: "faq";
      items: { question: string; answer: string }[];
    };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
  content: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tivimate-errors-stalker-portal-and-multiple-screen-issues",
    title: "TiviMate Errors: Stalker Portal & Multiple Screen Issues Fix",
    description:
      "Fix common TiviMate errors including Stalker Portal problems, MAC address issues, device already connected messages, Multiview black screens and connection limits.",
    excerpt:
      "Troubleshoot TiviMate Stalker Portal errors, MAC issues, multiple-screen limits and Multiview black screens with practical fixes.",
    image: "/tivimate-errors-stalker-portal-multiple-screen-issues.png",
    imageAlt:
      "TiviMate errors Stalker Portal and multiple screen issues fix with Multiview error examples on TV",
    datePublished: "2026-09-27",
    dateModified: "2026-09-27",
    keywords: [
      "TiviMate Stalker Portal error",
      "TiviMate device already connected",
      "TiviMate Multiview black screen",
      "TiviMate multiple screen issues",
      "TiviMate MAC address",
      "TiviMate connection limit",
    ],
    content: [
      {
        type: "p",
        text: "TiviMate usually works smoothly once your IPTV playlist is configured correctly, but some errors can be confusing, especially when using a Stalker Portal or trying to watch multiple streams at the same time.",
      },
      {
        type: "p",
        text: "Common problems include Stalker Portal errors, MAC address issues, “device already connected” messages, connection-limit errors, black screens in Multiview, channels constantly refreshing, and one stream stopping when another starts.",
      },
      {
        type: "p",
        text: "The important thing is to identify whether the problem comes from TiviMate, your FireStick or Android TV device, your internet connection, or the IPTV provider.",
      },
      {
        type: "p",
        parts: [
          "This guide explains the most common causes and the practical steps you can try. If you are still setting up your IPTV service, start with our ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          ".",
        ],
      },
      { type: "h2", text: "TiviMate Stalker Portal Errors" },
      {
        type: "p",
        text: "Stalker Portal works differently from a normal M3U or Xtream Codes playlist. It commonly uses a MAC address or device identity that must be recognized and activated by the IPTV provider.",
      },
      {
        type: "p",
        parts: [
          "If TiviMate shows an error while processing the Stalker playlist, check these things first. For standard playlist methods, see ",
          {
            label: "how to add a playlist to TiviMate",
            href: blogPostPath(blogSlugs.addPlaylist),
          },
          ".",
        ],
      },
      { type: "h3", text: "1. Check the Portal URL" },
      {
        type: "p",
        text: "Enter the portal address exactly as provided by your IPTV service.",
      },
      {
        type: "p",
        text: "A small difference in the URL can prevent the playlist from loading. Do not automatically add or remove /c, /stalker_portal/, or another path unless your provider specifically gives you that format.",
      },
      { type: "h3", text: "2. Check the MAC Address" },
      {
        type: "p",
        text: "If your provider uses MAC-based authentication, the MAC address shown by TiviMate needs to be registered on the provider's side.",
      },
      {
        type: "p",
        text: "If you recently:",
      },
      {
        type: "ul",
        items: [
          "Reset your FireStick",
          "Reinstalled TiviMate",
          "Changed devices",
          "Created a new Stalker playlist",
          "Changed the MAC address",
        ],
      },
      {
        type: "p",
        text: "ask your provider to confirm that the correct MAC is active.",
      },
      {
        type: "p",
        text: "A factory reset or new installation can result in a different device identity, which can cause an account that previously worked to stop working.",
      },
      { type: "h3", text: "3. Avoid Changing Extra Stalker Settings" },
      {
        type: "p",
        text: "Do not randomly change the MAC, device ID, serial number, or User Agent simply because the playlist is not loading.",
      },
      {
        type: "p",
        text: "These values can be part of the provider's authentication system. If your provider has given you specific values, use those values.",
      },
      {
        type: "p",
        text: "If the same Stalker account works on another supported device but fails in TiviMate, ask the provider whether TiviMate is supported for that portal.",
      },
      { type: "h3", text: "4. “Device Already Connected” Error" },
      {
        type: "p",
        text: "This normally means the provider's system believes the account or MAC is already being used.",
      },
      {
        type: "p",
        text: "Close the IPTV application on other devices and wait a few minutes before trying again.",
      },
      {
        type: "p",
        text: "If the problem continues, ask the provider to check whether the MAC is still registered to another device or whether the active connection needs to be reset.",
      },
      {
        type: "h2",
        text: "TiviMate Multiple Screen and Connection Issues",
      },
      {
        type: "p",
        text: "One of the biggest misunderstandings with IPTV is the difference between number of devices and number of simultaneous connections.",
      },
      {
        type: "p",
        text: "You may be able to install TiviMate on several devices, but your IPTV subscription may allow only one stream at a time.",
      },
      {
        type: "p",
        text: "For example:",
      },
      {
        type: "ul",
        items: [
          "1 connection: one stream at a time",
          "2 connections: two streams at the same time",
          "3 connections: three simultaneous streams",
        ],
      },
      {
        type: "p",
        text: "If your subscription allows one connection and you start a second channel on another TV, the first stream may stop, buffer, refresh, or display a connection-limit message.",
      },
      {
        type: "p",
        parts: [
          "This is usually a provider-side restriction, not a ",
          {
            label: "TiviMate Premium vs Free",
            href: blogPostPath(blogSlugs.premiumVsFree),
          },
          " problem.",
        ],
      },
      {
        type: "h2",
        text: "Why Does One Screen Stop When I Open Another?",
      },
      {
        type: "p",
        text: "If one IPTV stream works perfectly until you start another, check your provider's connection limit first.",
      },
      {
        type: "p",
        text: "Also remember that a stream may count as a connection even when you are not actively watching it in the way you expect. Recording, Multiview, background playback, or another active device can potentially consume an additional connection depending on how the provider counts streams.",
      },
      {
        type: "p",
        text: "Close TiviMate completely on other devices and test again with only one stream active.",
      },
      {
        type: "p",
        text: "If one stream works but two streams do not, ask your provider how many simultaneous connections your account actually supports.",
      },
      { type: "h2", text: "TiviMate Multiview Shows a Black Screen" },
      {
        type: "p",
        text: "Multiview lets you watch multiple channels at the same time, but it requires more from both your IPTV service and your streaming device.",
      },
      {
        type: "p",
        text: "If the second screen becomes black, try these steps:",
      },
      {
        type: "ul",
        items: [
          "Test each channel separately.",
          "Confirm your IPTV plan supports enough simultaneous connections.",
          "Try two channels from the same provider.",
          "Try channels with similar resolution and frame rates.",
          "Restart TiviMate.",
          "Restart your streaming device.",
          "Check TiviMate's playback settings.",
        ],
      },
      {
        type: "p",
        text: "A recent TiviMate community report found that disabling Tunnelled Playback resolved a problem where one Multiview screen remained black. This is worth testing when both streams should be available but one screen refuses to display video.",
      },
      {
        type: "p",
        text: "However, do not assume every Multiview problem is a playback setting. If your IPTV subscription supports only one connection, changing TiviMate settings will not create a second connection.",
      },
      { type: "h2", text: "Multiple Screens Keep Refreshing" },
      {
        type: "p",
        text: "If two devices are being used and one repeatedly refreshes while the other plays, check the subscription's simultaneous connection limit.",
      },
      {
        type: "p",
        text: "This is particularly important when using the same IPTV account on multiple TVs.",
      },
      {
        type: "p",
        text: "If your provider confirms that you have enough connections, test the following:",
      },
      {
        type: "ul",
        items: [
          "Restart both devices.",
          "Close TiviMate completely on unused devices.",
          "Remove duplicate playlists that may still be active.",
          "Test each playlist separately.",
          "Check your internet connection.",
          "Test with lower-resolution channels.",
          "Check whether the issue happens with every channel or only specific streams.",
        ],
      },
      {
        type: "p",
        text: "Community troubleshooting discussions repeatedly point to the IPTV provider's connection allowance as an important factor in these situations.",
      },
      { type: "h2", text: "TiviMate Multiview Is Slow or Choppy" },
      {
        type: "p",
        text: "Running several streams at once requires more processing power, decoding capability, bandwidth, and provider connections.",
      },
      {
        type: "p",
        text: "If one 1080p stream works normally but two or three streams become unstable, your device may be reaching its limits.",
      },
      {
        type: "p",
        text: "Try two lower-resolution streams first. If they work but higher-resolution streams do not, the problem may be related to device performance rather than your subscription.",
      },
      {
        type: "p",
        text: "You can also restart the device and close unnecessary background applications before using Multiview.",
      },
      {
        type: "h2",
        text: "When the Problem Is Probably Your IPTV Provider",
      },
      {
        type: "p",
        text: "Contact your provider when:",
      },
      {
        type: "ul",
        items: [
          "Your MAC is not activated.",
          "The Stalker portal rejects your device.",
          "Your subscription has expired.",
          "Your connection limit is being reached.",
          "The same playlist fails on multiple devices.",
          "Channels suddenly stop working across different players.",
          "Your provider's server is unavailable.",
          "You need a MAC binding reset.",
        ],
      },
      {
        type: "p",
        text: "TiviMate cannot change a provider's server-side connection limit or activate a MAC address that has not been registered.",
      },
      { type: "h2", text: "Quick TiviMate Error Checklist" },
      {
        type: "p",
        text: "Before reinstalling TiviMate, check these in order:",
      },
      {
        type: "ol",
        items: [
          "Stalker Portal: Confirm the portal URL and registered MAC.",
          "Playlist: Make sure the correct IPTV account is being used.",
          "Multiple screens: Check your simultaneous connection limit.",
          "Multiview: Test individual streams first.",
          "Black screen: Try changing playback settings, including Tunnelled Playback.",
          "Refreshing: Close TiviMate on other devices and test one connection.",
          "Provider issue: Ask the provider to verify your account, MAC binding and active connections.",
          "Device issue: Restart your FireStick, Android TV or streaming box and test again.",
        ],
      },
      {
        type: "p",
        text: "Most TiviMate errors become much easier to solve once you determine whether the problem is caused by the player, device, internet connection, or IPTV provider. Avoid changing several settings at once. Test one thing at a time so you can identify the actual cause.",
      },
      {
        type: "p",
        parts: [
          "If you are still setting up your IPTV service, start with our ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          " and then learn ",
          {
            label: "how to add a playlist to TiviMate",
            href: blogPostPath(blogSlugs.addPlaylist),
          },
          " correctly. Looking for a compatible service? Review our ",
          { label: "IPTV Plans", href: routes.plans },
          ".",
        ],
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            question: "Why is my Stalker Portal not working on TiviMate?",
            answer:
              "Check the portal URL, MAC address and provider activation first. If the MAC is not registered or is still linked to another device, the portal may reject the connection. Ask your IPTV provider to confirm the MAC currently assigned to your account.",
          },
          {
            question: "Why does TiviMate say “Device Already Connected”?",
            answer:
              "This usually indicates that the IPTV provider has detected an existing connection or that your MAC/device is still registered elsewhere. Close the IPTV service on other devices and ask your provider to reset the active connection if necessary.",
          },
          {
            question:
              "How many screens can I use with one IPTV subscription?",
            answer:
              "It depends on the number of simultaneous connections included with your IPTV subscription. A one-connection subscription generally supports one active stream at a time, while a two-connection plan can support two simultaneous streams.",
          },
          {
            question:
              "Why does TiviMate stop one channel when I open another?",
            answer:
              "Your IPTV provider may allow only one simultaneous connection. Starting a second stream can cause the first one to stop or refresh. Check the connection limit attached to your IPTV account.",
          },
          {
            question: "Why is TiviMate Multiview showing a black screen?",
            answer:
              "First confirm that your IPTV account supports enough simultaneous connections. Then test the streams individually and restart TiviMate. If both streams are available but one remains black, try disabling Tunnelled Playback in the playback settings. This has resolved a similar Multiview issue reported by a TiviMate user.",
          },
          {
            question:
              "Why does TiviMate keep refreshing when I use two TVs?",
            answer:
              "The most common thing to check is the IPTV provider's simultaneous connection limit. If your account allows only one connection, the second TV may interrupt or refresh the first stream.",
          },
          {
            question: "Can I use the same Stalker Portal on two devices?",
            answer:
              "Usually, Stalker Portal access is tied to a MAC/device identity, so you should not assume that one Stalker account can be used independently on multiple devices. Ask your IPTV provider whether your subscription supports multiple registered devices or MAC addresses.",
          },
          {
            question:
              "Why did my Stalker Portal stop working after resetting my device?",
            answer:
              "A reset or reinstallation can result in a different device identity or MAC being used. Compare the current information shown by TiviMate with the information registered by your provider and ask them to update or reset the binding if needed.",
          },
          {
            question:
              "Why does Stalker Portal work on another app but not TiviMate?",
            answer:
              "The provider may have different compatibility requirements for its Stalker implementation. Confirm that the provider supports TiviMate and ask whether specific portal, MAC, device ID, serial number, or User Agent information is required. Community reports show that some Stalker services are configured specifically around supported device types.",
          },
          {
            question:
              "Does TiviMate Premium give me more IPTV connections?",
            answer:
              "No. TiviMate Premium features and your IPTV provider's simultaneous-stream allowance are separate things. Premium does not automatically increase the number of streams allowed by your IPTV subscription.",
          },
          {
            question:
              "Why does Multiview work with one provider but not another?",
            answer:
              "Different IPTV providers can impose different connection limits and server restrictions. If one provider allows two simultaneous streams while another allows only one, Multiview can behave differently even on the same device.",
          },
          {
            question:
              "Should I reinstall TiviMate to fix a Stalker Portal error?",
            answer:
              "Not as your first step. Check the portal URL, MAC registration, provider account and connection status first. Reinstalling TiviMate may create a new device identity and can make a MAC-based setup more complicated if the provider has not updated your registration.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-download-or-install-tivimate-on-firestick",
    title: "How to Download or Install TiviMate on FireStick: Easy Guide",
    description:
      "Learn how to install TiviMate on FireStick, add M3U or Xtream Codes, set up EPG and fix common IPTV problems with this easy Fire TV guide.",
    excerpt:
      "Install TiviMate on FireStick, add your IPTV playlist, configure EPG and get started with a clear step-by-step setup.",
    image: "/how-to-download-or-install-tivimate-on-firestick.png",
    imageAlt:
      "How to download or install TiviMate on FireStick easy guide with Fire TV Stick and TiviMate player",
    datePublished: "2026-09-27",
    dateModified: "2026-09-27",
    keywords: [
      "Install TiviMate on FireStick",
      "Download TiviMate FireStick",
      "IPTV on FireStick",
      "TiviMate Fire TV",
      "FireStick IPTV setup",
      "TiviMate APK FireStick",
    ],
    content: [
      {
        type: "p",
        text: "Want to watch IPTV on your FireStick but not sure where to start?",
      },
      {
        type: "p",
        text: "The process is straightforward once you understand that there are two separate parts: the IPTV player and the IPTV service. TiviMate is a popular player for organising and playing compatible IPTV playlists, while your IPTV provider supplies the channels and streaming information.",
      },
      {
        type: "p",
        parts: [
          "In this guide, you will learn how to install IPTV on FireStick, set up TiviMate, add an M3U playlist or Xtream Codes, configure your TV guide and troubleshoot the most common problems. If you need the complete player setup process, see our ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          ".",
        ],
      },
      { type: "h2", text: "Quick Answer" },
      {
        type: "p",
        text: "To install IPTV on FireStick, first prepare your Fire TV device for the required app installation method, then install a compatible IPTV player such as TiviMate. After installing TiviMate, add your IPTV provider's M3U playlist or Xtream Codes, allow the channels to load, and configure EPG if your provider supplies it.",
      },
      {
        type: "h2",
        text: "What Do You Need to Install IPTV on FireStick?",
      },
      {
        type: "p",
        text: "Before starting, make sure you have:",
      },
      {
        type: "ul",
        items: [
          "An Amazon FireStick or compatible Fire TV device",
          "A stable internet connection",
          "TiviMate or another compatible IPTV player",
          "An active IPTV subscription, if required",
          "An M3U playlist URL or Xtream Codes login",
          "EPG information, if supplied by your provider",
        ],
      },
      {
        type: "p",
        text: "TiviMate itself does not provide TV channels. It works as a media player that connects to compatible playlists or login details supplied by an IPTV service.",
      },
      {
        type: "p",
        parts: [
          "If you need the complete TiviMate setup process, see our ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          ".",
        ],
      },
      { type: "h2", text: "Step 1: Prepare Your FireStick" },
      {
        type: "p",
        text: "Turn on your FireStick and make sure it is connected to the internet.",
      },
      {
        type: "p",
        text: "Go to the Fire TV settings and check your device software and available installation options.",
      },
      {
        type: "p",
        text: "The exact menus can differ between Fire TV versions. Amazon's current documentation shows that Fire TV is moving across different operating-system environments, so instructions written for older FireStick versions may not appear exactly the same on every device.",
      },
      {
        type: "p",
        text: "If your Fire TV device supports installing applications from outside the Amazon Appstore, you may need to enable the appropriate installation permission in its Developer Options.",
      },
      {
        type: "p",
        text: "On supported older Fire OS devices, this has commonly been found under:",
      },
      {
        type: "note",
        text: "Settings → My Fire TV → Developer Options",
      },
      {
        type: "p",
        text: "Amazon also documents Apps from Unknown Sources as a Fire TV sideloading setting on supported devices.",
      },
      {
        type: "note",
        text: "Important: Do not enable settings or install files from sources you do not trust. Only use a legitimate application source and verify the APK before installing it.",
      },
      {
        type: "h2",
        text: "Step 2: Install a Downloader App if Required",
      },
      {
        type: "p",
        text: "For Fire TV devices that support traditional Android APK sideloading, Downloader is commonly used to retrieve an APK.",
      },
      {
        type: "p",
        text: "You can search for Downloader from the Fire TV interface and install it if it is available for your device.",
      },
      {
        type: "p",
        text: "Open Downloader and use its URL field only with a download address you trust.",
      },
      {
        type: "p",
        text: "Amazon officially describes installing applications outside the Appstore as sideloading and documents alternative methods such as ADB for Fire TV.",
      },
      {
        type: "p",
        text: "Because Fire TV software is changing, the exact sideloading process may differ on newer devices.",
      },
      { type: "h2", text: "Step 3: Install TiviMate on FireStick" },
      {
        type: "p",
        text: "Once you have a supported method for installing the TiviMate APK, download the current TiviMate application package from a trusted source.",
      },
      {
        type: "p",
        text: "Follow the installation prompt and wait for the installation to finish.",
      },
      {
        type: "p",
        text: "Then open TiviMate from your FireStick's applications.",
      },
      {
        type: "p",
        text: "You should see the option to add a playlist during the initial setup.",
      },
      {
        type: "p",
        parts: [
          "If you need a more detailed installation walkthrough, use our ",
          { label: "TiviMate installation guide", href: routes.installation },
          ".",
        ],
      },
      { type: "h2", text: "Step 4: Add Your IPTV Playlist" },
      {
        type: "p",
        text: "After opening TiviMate, select:",
      },
      {
        type: "note",
        text: "Add Playlist",
      },
      {
        type: "p",
        text: "You will normally use one of the connection methods provided by your IPTV service.",
      },
      { type: "h3", text: "Option 1: M3U Playlist" },
      {
        type: "p",
        text: "If your provider gives you an M3U URL:",
      },
      {
        type: "ol",
        items: [
          "Select the M3U playlist option.",
          "Choose the URL method.",
          "Enter the complete M3U link.",
          "Continue.",
          "Give the playlist a name if requested.",
          "Wait for TiviMate to load the channels.",
        ],
      },
      {
        type: "p",
        text: "Copy the complete URL carefully. One missing character can prevent the playlist from loading.",
      },
      { type: "h3", text: "Option 2: Xtream Codes" },
      {
        type: "p",
        text: "If your provider gives you Xtream Codes details:",
      },
      {
        type: "ol",
        items: [
          "Select the Xtream Codes option.",
          "Enter the server URL.",
          "Enter your username.",
          "Enter your password.",
          "Continue.",
          "Wait for TiviMate to load your content.",
        ],
      },
      {
        type: "p",
        text: "Your username and password are normally case-sensitive, so copy them exactly as provided.",
      },
      {
        type: "p",
        parts: [
          "For a complete explanation of both methods, read our guide on ",
          {
            label: "how to add a playlist to TiviMate",
            href: blogPostPath(blogSlugs.addPlaylist),
          },
          ".",
        ],
      },
      { type: "h2", text: "Step 5: Set Up the EPG" },
      {
        type: "p",
        text: "EPG means Electronic Programme Guide.",
      },
      {
        type: "p",
        text: "It displays programme information, schedules and upcoming shows inside your IPTV player.",
      },
      {
        type: "p",
        text: "Some IPTV providers supply EPG information automatically. Others provide a separate EPG URL.",
      },
      {
        type: "p",
        text: "If your provider gives you an EPG URL, add it through the EPG settings in TiviMate.",
      },
      {
        type: "p",
        text: "If your channels appear but the guide says No Information, check whether your provider has supplied an EPG source and whether the URL was entered correctly.",
      },
      { type: "h2", text: "Step 6: Test Your IPTV Channels" },
      {
        type: "p",
        text: "After your playlist has loaded, open Live TV and test several channels.",
      },
      {
        type: "p",
        text: "Check:",
      },
      {
        type: "ul",
        items: [
          "Channel playback",
          "Channel groups",
          "EPG information",
          "Audio",
          "Picture quality",
          "Channel switching",
        ],
      },
      {
        type: "p",
        text: "Do not test only one channel. If one channel does not work while others play normally, the issue may be with that particular stream rather than your FireStick setup.",
      },
      {
        type: "h2",
        text: "How to Improve IPTV Performance on FireStick",
      },
      {
        type: "p",
        text: "A stable connection is more important than simply having a high advertised internet speed.",
      },
      {
        type: "p",
        text: "For better IPTV performance:",
      },
      { type: "h3", text: "Use a Strong Wi-Fi Connection" },
      {
        type: "p",
        text: "Keep the FireStick within a reasonable range of your router.",
      },
      {
        type: "p",
        text: "If possible, reduce interference between the FireStick and router.",
      },
      { type: "h3", text: "Restart Your FireStick" },
      {
        type: "p",
        text: "If IPTV suddenly starts buffering or applications become slow, restart the FireStick.",
      },
      {
        type: "p",
        text: "A restart can clear temporary system and application issues.",
      },
      { type: "h3", text: "Clear Unnecessary App Cache" },
      {
        type: "p",
        text: "FireStick devices have limited storage. Too many applications and cached files can contribute to performance problems.",
      },
      {
        type: "p",
        text: "Remove applications you no longer use and clear unnecessary cache where appropriate.",
      },
      { type: "h3", text: "Test Different Channels" },
      {
        type: "p",
        text: "If only one or two channels buffer while others work correctly, the issue may be related to those streams or the IPTV provider.",
      },
      {
        type: "p",
        text: "If every channel buffers, investigate your internet connection, device performance and IPTV service.",
      },
      { type: "h2", text: "Common IPTV Problems on FireStick" },
      {
        type: "table",
        headers: ["Problem", "What to Check"],
        rows: [
          [
            "IPTV app will not install",
            "Check device compatibility and available storage",
          ],
          [
            "TiviMate will not open",
            "Restart FireStick and check the installed app",
          ],
          [
            "Playlist will not load",
            "Recheck M3U URL or Xtream Codes",
          ],
          [
            "Login failed",
            "Confirm server, username and password",
          ],
          [
            "EPG shows no information",
            "Check the EPG source supplied by your provider",
          ],
          [
            "IPTV keeps buffering",
            "Test your connection and other channels",
          ],
          [
            "Some channels are missing",
            "Check your IPTV subscription and channel groups",
          ],
          [
            "FireStick storage is full",
            "Remove unused apps and clear unnecessary cache",
          ],
        ],
      },
      {
        type: "h2",
        text: "Is TiviMate Free or Premium on FireStick?",
      },
      {
        type: "p",
        text: "TiviMate has free and Premium functionality.",
      },
      {
        type: "p",
        text: "The free version can be useful for basic IPTV playback, while Premium provides additional features depending on the current version.",
      },
      {
        type: "p",
        text: "If you are only testing an IPTV service, start with the features you actually need.",
      },
      {
        type: "p",
        text: "If you require advanced features such as additional playlist management or other Premium functionality, review the current Premium options before purchasing.",
      },
      {
        type: "p",
        parts: [
          "You can also read our ",
          {
            label: "TiviMate Premium vs Free comparison",
            href: blogPostPath(blogSlugs.premiumVsFree),
          },
          " to understand the differences.",
        ],
      },
      { type: "h2", text: "Do You Need an IPTV Subscription?" },
      {
        type: "p",
        text: "Yes, if you want access to IPTV channels.",
      },
      {
        type: "p",
        text: "TiviMate is the player. It does not automatically provide the channels you want to watch.",
      },
      {
        type: "p",
        text: "You need a compatible IPTV service that provides supported access details such as an M3U playlist or Xtream Codes.",
      },
      {
        type: "p",
        parts: [
          "If you are looking for a compatible service, you can review our ",
          { label: "IPTV Plans", href: routes.plans },
          " before choosing a subscription.",
        ],
      },
      {
        type: "p",
        text: "Always make sure that the IPTV content you access is authorised for your use.",
      },
      { type: "h2", text: "Final FireStick IPTV Setup Checklist" },
      {
        type: "p",
        text: "Before you finish, check the following:",
      },
      {
        type: "ul",
        items: [
          "FireStick is connected to the internet.",
          "Your Fire TV software supports the required installation method.",
          "TiviMate is installed successfully.",
          "Your IPTV subscription is active.",
          "You have the correct M3U or Xtream Codes details.",
          "Your playlist loads successfully.",
          "Your channels play correctly.",
          "EPG is configured if supplied.",
          "You have tested several channels.",
          "You are using a trusted application source.",
        ],
      },
      { type: "h2", text: "Final Thoughts" },
      {
        type: "p",
        text: "Installing IPTV on FireStick becomes much easier when you separate the process into three steps: install the player, connect your IPTV service and test playback.",
      },
      {
        type: "p",
        text: "TiviMate can handle the player side of the setup, while your IPTV provider supplies the playlist or login details.",
      },
      {
        type: "p",
        parts: [
          "If you are starting from scratch, begin with our ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          ". If you already have your IPTV credentials, follow our ",
          {
            label: "M3U and Xtream Codes playlist guide",
            href: blogPostPath(blogSlugs.addPlaylist),
          },
          " to connect your service and start watching.",
        ],
      },
      { type: "h2", text: "Call-To-Action" },
      {
        type: "p",
        parts: [
          "If you already have TiviMate installed, the next step is connecting your IPTV service. Check our ",
          { label: "IPTV Plans", href: routes.plans },
          " to see the available options, then use your M3U or Xtream Codes details to complete the setup.",
        ],
      },
      { type: "h2", text: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "Can I install IPTV on a FireStick?",
            answer:
              "Yes. You can use an IPTV player such as TiviMate on a FireStick and connect it to an IPTV service using an M3U playlist or Xtream Codes login. If the player is not available through the Amazon Appstore, it may need to be sideloaded. Amazon refers to installing apps outside the Appstore as sideloading.",
          },
          {
            question: "How do I install TiviMate on FireStick?",
            answer:
              "To install TiviMate, prepare your FireStick, install a suitable downloader or sideloading method when required, download the TiviMate APK from a trusted source, and complete the installation. After installing TiviMate, you need an IPTV subscription or playlist to load channels.",
          },
          {
            question: "Do I need an IPTV subscription to use TiviMate?",
            answer:
              "Yes, if you want to watch live channels or other IPTV content. TiviMate is a media player, so you need a playlist or login details from an IPTV service. The player itself does not provide your TV channels.",
          },
          {
            question: "How do I add IPTV to TiviMate on FireStick?",
            answer:
              "Open TiviMate and select Add Playlist. You can normally choose between an M3U playlist and Xtream Codes. For Xtream Codes, enter the server URL, username, and password provided by your IPTV service. For M3U, paste the complete playlist URL.",
          },
          {
            question: "What is the difference between M3U and Xtream Codes?",
            answer:
              "An M3U playlist generally uses one long URL containing your playlist information. Xtream Codes uses separate fields for the server URL, username, and password. The correct option depends on what your IPTV provider gives you.",
          },
          {
            question: "Why is my IPTV not working on FireStick?",
            answer:
              "Common causes include incorrect login details, an expired subscription, poor internet connection, an incorrect playlist URL, or a temporary provider server problem. First, check your internet connection and make sure your username, password, server URL, or M3U link was entered exactly as provided.",
          },
          {
            question: "Why are my IPTV channels not loading in TiviMate?",
            answer:
              "Give TiviMate some time to process the playlist, especially if it contains many channels. If nothing loads, check the playlist credentials and internet connection. You can also refresh the playlist from TiviMate's settings.",
          },
          {
            question: "How do I get the TV guide or EPG on TiviMate?",
            answer:
              "EPG stands for Electronic Program Guide and shows program information for your channels. Depending on your IPTV service and playlist format, EPG information may load automatically or you may need to enter an XMLTV EPG URL provided by your IPTV service.",
          },
          {
            question: "Can I use TiviMate on multiple FireStick devices?",
            answer:
              "This depends on your TiviMate account and IPTV subscription terms. Your IPTV provider may also limit the number of simultaneous connections allowed by your subscription, so check the conditions of your service before using the same account on multiple devices.",
          },
          {
            question: "Is TiviMate Free on FireStick?",
            answer:
              "TiviMate has a free version, while Premium provides additional features. The FireStick installation itself and your IPTV subscription are separate from the TiviMate Premium upgrade. If you are deciding whether Premium is worthwhile, see our TiviMate Premium vs Free comparison.",
          },
          {
            question:
              "What should I do if TiviMate says the playlist is invalid?",
            answer:
              "Check the playlist URL or Xtream Codes credentials carefully. Make sure there are no extra spaces or missing characters. If the details are correct but the playlist still fails, contact your IPTV provider to confirm that your subscription and server are active.",
          },
          {
            question: "Is IPTV legal on FireStick?",
            answer:
              "Using a FireStick or an IPTV player is not, by itself, illegal. The important issue is whether the content you access is properly licensed and authorized for distribution in your location. Use IPTV services and content that you are legally entitled to access.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-add-playlist-to-tivimate",
    title: "How to Add Playlist to TiviMate (M3U & Xtream Codes) Easily",
    description:
      "Learn how to add an IPTV playlist to TiviMate using M3U or Xtream Codes. Step-by-step setup, EPG tips and troubleshooting if your playlist will not load.",
    excerpt:
      "Add an IPTV playlist to TiviMate with M3U or Xtream Codes. Follow the simple steps, configure EPG and fix common loading issues.",
    image: "/how-to-add-playlists-to-tivimate.png",
    imageAlt:
      "How to add playlist to TiviMate with M3U playlist URL and Xtream Codes setup on a TV screen",
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    keywords: [
      "How to add playlist to TiviMate",
      "TiviMate M3U",
      "TiviMate Xtream Codes",
      "Add IPTV to TiviMate",
      "TiviMate playlist setup",
      "TiviMate EPG",
    ],
    content: [
      {
        type: "p",
        text: "Adding an IPTV playlist to TiviMate is usually a simple process, but the first setup can be confusing if you are not sure which login method your IPTV provider has given you.",
      },
      {
        type: "p",
        text: "Most TiviMate users will receive either an M3U playlist URL or Xtream Codes details. Both methods can connect your IPTV service to TiviMate, but the information you enter is different.",
      },
      {
        type: "p",
        parts: [
          "In this guide, you will learn how to add a playlist to TiviMate using M3U and Xtream Codes, what information you need before starting, how to configure EPG, and what to do if your playlist does not load. If you are still deciding between Free and Premium, see ",
          {
            label: "TiviMate Premium vs TiviMate Free",
            href: blogPostPath(blogSlugs.premiumVsFree),
          },
          ".",
        ],
      },
      { type: "h2", text: "Quick Answer" },
      {
        type: "p",
        text: "To add an IPTV playlist to TiviMate, open TiviMate → Settings → Playlists → Add Playlist. Choose M3U if your provider gave you a playlist URL, or choose Xtream Codes if you received a server URL, username and password. Enter the details carefully, let TiviMate load the playlist, and then check your channels and EPG.",
      },
      {
        type: "h2",
        text: "What Do You Need Before Adding a Playlist to TiviMate?",
      },
      {
        type: "p",
        text: "Before opening TiviMate, make sure you have the information supplied by your IPTV service.",
      },
      {
        type: "p",
        text: "Depending on your provider, you may receive:",
      },
      {
        type: "ul",
        items: [
          "An M3U or M3U8 playlist URL",
          "Xtream Codes server URL",
          "Xtream Codes username",
          "Xtream Codes password",
          "EPG URL",
          "Subscription activation information",
        ],
      },
      {
        type: "p",
        text: "You also need TiviMate installed on a compatible device.",
      },
      {
        type: "p",
        parts: [
          "If you have not configured your IPTV service yet, you can follow our ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          " for the complete setup process.",
        ],
      },
      {
        type: "p",
        text: "Your IPTV provider supplies the content and access details. TiviMate acts as the player that organises and plays the supported playlist.",
      },
      { type: "h2", text: "What Is an M3U Playlist?" },
      {
        type: "p",
        text: "An M3U playlist is a file or URL containing information that a compatible media player can use to access media streams.",
      },
      {
        type: "p",
        text: "For IPTV, your provider may send you an M3U URL that contains information about channels, groups and stream addresses.",
      },
      {
        type: "p",
        text: "An M3U link may look something like this:",
      },
      {
        type: "note",
        text: "https://example.com/get.php?username=USERNAME&password=PASSWORD&type=m3u_plus",
      },
      {
        type: "p",
        text: "The actual URL you receive will be different.",
      },
      {
        type: "p",
        text: "Never share your personal M3U URL publicly, because it may contain account information or credentials.",
      },
      { type: "h2", text: "What Are Xtream Codes?" },
      {
        type: "p",
        text: "Xtream Codes is a login method used by many IPTV services.",
      },
      {
        type: "p",
        text: "Instead of entering one long M3U URL, you normally enter three separate pieces of information:",
      },
      {
        type: "ul",
        items: ["Server URL", "Username", "Password"],
      },
      {
        type: "p",
        text: "For example:",
      },
      {
        type: "ul",
        items: [
          "Server: http://example.com:8080",
          "Username: yourusername",
          "Password: yourpassword",
        ],
      },
      {
        type: "p",
        text: "Your provider should give you the exact details required for your account.",
      },
      {
        type: "h2",
        text: "M3U vs Xtream Codes: Which Should You Use?",
      },
      {
        type: "p",
        text: "Both methods can connect an IPTV service to TiviMate. The best option is usually the method your provider specifically supports.",
      },
      {
        type: "table",
        headers: ["Feature", "M3U Playlist", "Xtream Codes"],
        rows: [
          [
            "Setup method",
            "Enter one playlist URL",
            "Enter server, username and password",
          ],
          ["Easy for beginners", "Yes", "Yes"],
          [
            "Channel categories",
            "Depends on playlist",
            "Usually provided by the service",
          ],
          [
            "EPG",
            "May be supplied separately",
            "May be provided through the service",
          ],
          [
            "VOD",
            "Depends on playlist",
            "Often organised separately",
          ],
          [
            "TV series",
            "Depends on playlist",
            "Often organised separately",
          ],
          [
            "Best approach",
            "Use when provider gives M3U",
            "Use when provider gives Xtream login",
          ],
        ],
      },
      {
        type: "p",
        text: "Do not try to guess or convert your provider's login details unless you understand exactly what they have supplied. Using the wrong server address or credentials can prevent the playlist from loading.",
      },
      { type: "h2", text: "How to Add an M3U Playlist to TiviMate" },
      {
        type: "p",
        text: "If your IPTV provider has given you an M3U or M3U8 URL, follow these steps.",
      },
      { type: "h3", text: "Step 1: Open TiviMate" },
      {
        type: "p",
        text: "Launch TiviMate on your compatible TV device.",
      },
      {
        type: "p",
        text: "If you are opening the application for the first time, you may see an option to add a playlist directly.",
      },
      {
        type: "p",
        text: "If you already have TiviMate configured, open the main menu and go to:",
      },
      {
        type: "note",
        text: "Settings → Playlists → Add Playlist",
      },
      {
        type: "p",
        text: "The exact wording can vary slightly between TiviMate versions and devices.",
      },
      { type: "h3", text: "Step 2: Select M3U Playlist" },
      {
        type: "p",
        text: "After selecting Add Playlist, choose the M3U playlist option.",
      },
      {
        type: "p",
        text: "TiviMate will ask you how you want to provide the playlist.",
      },
      {
        type: "p",
        text: "For an online playlist supplied by your IPTV provider, select the URL option.",
      },
      { type: "h3", text: "Step 3: Enter Your M3U URL" },
      {
        type: "p",
        text: "Paste the complete M3U URL supplied by your IPTV provider.",
      },
      {
        type: "p",
        text: "Be careful when entering the address.",
      },
      {
        type: "p",
        text: "A single missing character, extra space or incorrect letter can cause the playlist to fail.",
      },
      {
        type: "p",
        text: "Do not manually shorten the URL.",
      },
      {
        type: "p",
        text: "If your provider sent the link by email or message, copy it directly whenever possible.",
      },
      { type: "h3", text: "Step 4: Let TiviMate Load the Playlist" },
      {
        type: "p",
        text: "After entering the M3U URL, continue to the next step.",
      },
      {
        type: "p",
        text: "TiviMate will attempt to connect to the playlist source and retrieve the available information.",
      },
      {
        type: "p",
        text: "Depending on your IPTV service, this may include:",
      },
      {
        type: "ul",
        items: [
          "Live TV channels",
          "Channel groups",
          "Logos",
          "Programme information",
          "Movies",
          "TV series",
          "Catch-up content",
        ],
      },
      {
        type: "p",
        text: "The available sections depend on what your IPTV service actually provides.",
      },
      { type: "h3", text: "Step 5: Name Your Playlist" },
      {
        type: "p",
        text: "TiviMate may ask you to give the playlist a name.",
      },
      {
        type: "p",
        text: "You can use a simple name such as:",
      },
      {
        type: "ul",
        items: ["My IPTV", "Home IPTV"],
      },
      {
        type: "p",
        text: "If you use several services, choose a name that makes each playlist easy to identify.",
      },
      { type: "h3", text: "Step 6: Check Your Channels" },
      {
        type: "p",
        text: "Once the playlist has loaded, open the Live TV section.",
      },
      {
        type: "p",
        text: "Check whether your channel categories and channels are appearing correctly.",
      },
      {
        type: "p",
        text: "Try opening a few channels to confirm that playback is working.",
      },
      {
        type: "p",
        text: "If the playlist loads but channels do not play, the issue may be related to the IPTV service, stream availability, device or internet connection rather than the playlist entry itself.",
      },
      { type: "h3", text: "Step 7: Configure Your EPG" },
      {
        type: "p",
        text: "EPG stands for Electronic Programme Guide.",
      },
      {
        type: "p",
        text: "It provides programme information such as:",
      },
      {
        type: "ul",
        items: [
          "Current programme",
          "Upcoming programmes",
          "Programme times",
          "Channel schedules",
        ],
      },
      {
        type: "p",
        text: "Some IPTV services provide EPG information automatically.",
      },
      {
        type: "p",
        text: "Others provide a separate EPG URL.",
      },
      {
        type: "p",
        text: "If your provider gives you an EPG URL, use the information supplied by the provider to configure it in TiviMate.",
      },
      {
        type: "p",
        parts: [
          "For a more complete setup process, see our ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          ".",
        ],
      },
      { type: "h2", text: "How to Add Xtream Codes to TiviMate" },
      {
        type: "p",
        text: "If your provider has given you a server address, username and password, Xtream Codes may be the correct setup method.",
      },
      { type: "h3", text: "Step 1: Open TiviMate Settings" },
      {
        type: "p",
        text: "Launch TiviMate and open:",
      },
      {
        type: "note",
        text: "Settings → Playlists → Add Playlist",
      },
      {
        type: "p",
        text: "Select the Xtream Codes option if it is available in your version.",
      },
      { type: "h3", text: "Step 2: Enter the Server Address" },
      {
        type: "p",
        text: "Your IPTV provider should give you a server address.",
      },
      {
        type: "p",
        text: "For example:",
      },
      {
        type: "note",
        text: "http://example.com:8080",
      },
      {
        type: "p",
        text: "Enter the server exactly as supplied.",
      },
      {
        type: "p",
        text: "Do not add extra characters or change the address unless your provider tells you to.",
      },
      { type: "h3", text: "Step 3: Enter Your Username" },
      {
        type: "p",
        text: "Enter the username supplied with your IPTV subscription.",
      },
      {
        type: "p",
        text: "Check uppercase and lowercase characters if your provider uses them.",
      },
      {
        type: "p",
        text: "A small typing mistake can cause an authentication error.",
      },
      { type: "h3", text: "Step 4: Enter Your Password" },
      {
        type: "p",
        text: "Enter the password supplied by your provider.",
      },
      {
        type: "p",
        text: "Avoid adding spaces before or after the password.",
      },
      {
        type: "p",
        text: "If you are copying the password, check that your device has not accidentally copied an additional space.",
      },
      { type: "h3", text: "Step 5: Continue With the Setup" },
      {
        type: "p",
        text: "After entering the server address, username and password, continue.",
      },
      {
        type: "p",
        text: "TiviMate will attempt to connect to the service.",
      },
      {
        type: "p",
        text: "If the login is accepted, available categories and content should begin loading.",
      },
      { type: "h3", text: "Step 6: Check Live TV, Movies and Series" },
      {
        type: "p",
        text: "Depending on your IPTV service, the account may provide different sections.",
      },
      {
        type: "p",
        text: "You may see:",
      },
      {
        type: "ul",
        items: [
          "Live TV",
          "Movies",
          "TV Series",
          "Catch-up",
          "Categories",
          "EPG",
        ],
      },
      {
        type: "p",
        text: "Not every IPTV service provides all of these options.",
      },
      {
        type: "p",
        text: "If a particular section is missing, check what your subscription actually includes before changing TiviMate settings.",
      },
      { type: "h2", text: "M3U or Xtream Codes: Which Is Easier?" },
      {
        type: "p",
        text: "For most beginners, both methods are straightforward when the provider has supplied the correct information.",
      },
      {
        type: "p",
        text: "The main difference is how the login information is presented.",
      },
      {
        type: "ul",
        items: [
          "M3U: You normally paste one playlist URL.",
          "Xtream Codes: You enter a server address, username and password separately.",
        ],
      },
      {
        type: "p",
        text: "If your IPTV provider gives you both options, Xtream Codes can be convenient because the information is separated into individual fields and the service can provide structured categories where supported.",
      },
      {
        type: "p",
        text: "However, you should normally use the connection method recommended by your IPTV provider.",
      },
      {
        type: "h2",
        text: "How to Add an IPTV Playlist to TiviMate on Firestick",
      },
      {
        type: "p",
        parts: [
          "The playlist process is similar after TiviMate has been installed on your Firestick. If you still need to install the app, follow our guide on ",
          {
            label: "how to download or install TiviMate on FireStick",
            href: blogPostPath(blogSlugs.firestickInstall),
          },
          ".",
        ],
      },
      {
        type: "p",
        text: "Open TiviMate and select the option to add a playlist.",
      },
      {
        type: "p",
        text: "Then choose the method supplied by your IPTV provider:",
      },
      {
        type: "ul",
        items: [
          "M3U → Enter your M3U URL",
          "Xtream Codes → Enter server, username and password",
        ],
      },
      {
        type: "p",
        text: "After the playlist loads, check your channels and EPG.",
      },
      {
        type: "p",
        parts: [
          "If you have not installed or configured TiviMate yet, start with our ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          " before adding your playlist.",
        ],
      },
      {
        type: "h2",
        text: "What If TiviMate Does Not Load My Playlist?",
      },
      {
        type: "p",
        text: "A playlist that does not load does not always mean TiviMate is broken.",
      },
      {
        type: "p",
        text: "There are several things worth checking first.",
      },
      { type: "h3", text: "Check Your Internet Connection" },
      {
        type: "p",
        text: "Make sure your device is connected to the internet.",
      },
      {
        type: "p",
        text: "Try opening another online application on the same device.",
      },
      {
        type: "p",
        text: "If other applications are also having connection problems, your network may be the issue.",
      },
      { type: "h3", text: "Check Your M3U URL" },
      {
        type: "p",
        text: "If you are using M3U, carefully check the complete URL.",
      },
      {
        type: "p",
        text: "Make sure:",
      },
      {
        type: "ul",
        items: [
          "Nothing is missing",
          "There are no extra spaces",
          "The URL has not been truncated",
          "Your subscription is still active",
          "You copied the correct playlist",
        ],
      },
      { type: "h3", text: "Check Your Xtream Codes" },
      {
        type: "p",
        text: "If you are using Xtream Codes, check all three fields:",
      },
      {
        type: "ul",
        items: ["Server URL", "Username", "Password"],
      },
      {
        type: "p",
        text: "One incorrect field can prevent authentication.",
      },
      { type: "h3", text: "Check Your Subscription" },
      {
        type: "p",
        text: "An expired or inactive IPTV subscription may prevent your playlist from loading.",
      },
      {
        type: "p",
        text: "If your credentials were working previously and suddenly stopped working, contact your IPTV provider to confirm the account status.",
      },
      { type: "h3", text: "Restart TiviMate" },
      {
        type: "p",
        text: "Close and reopen TiviMate.",
      },
      {
        type: "p",
        text: "If necessary, restart your streaming device as well.",
      },
      {
        type: "p",
        text: "This is a simple step, but it can help rule out a temporary application or network issue.",
      },
      {
        type: "h2",
        text: "What If the Playlist Loads but Channels Are Missing?",
      },
      {
        type: "p",
        text: "If TiviMate successfully loads the playlist but some channels are missing, first check the IPTV service itself.",
      },
      {
        type: "p",
        text: "The missing channel may:",
      },
      {
        type: "ul",
        items: [
          "Not be included in your plan",
          "Have been removed by the provider",
          "Be temporarily unavailable",
          "Belong to a category that is hidden",
          "Have changed its name or location",
        ],
      },
      {
        type: "p",
        text: "Do not assume that every missing channel is caused by TiviMate.",
      },
      { type: "h2", text: "What If EPG Is Not Working?" },
      {
        type: "p",
        text: "If your channels appear but programme information says No Information, the problem may be related to EPG data.",
      },
      {
        type: "p",
        text: "First check whether your IPTV provider supplies an EPG.",
      },
      {
        type: "p",
        text: "If an EPG URL was provided, make sure you entered the correct URL.",
      },
      {
        type: "p",
        text: "Also remember that EPG information comes from the content source. TiviMate cannot create programme schedules that your provider does not supply.",
      },
      {
        type: "p",
        parts: [
          "Our ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          " also covers EPG configuration and common setup problems.",
        ],
      },
      {
        type: "h2",
        text: "Can I Add More Than One Playlist to TiviMate?",
      },
      {
        type: "p",
        text: "TiviMate supports playlist management, although the exact features available can depend on your version and licence.",
      },
      {
        type: "p",
        text: "Multiple playlists can be useful if you have more than one IPTV service or want to keep different content sources separate.",
      },
      {
        type: "p",
        text: "For example, you might have:",
      },
      {
        type: "ul",
        items: [
          "Main IPTV service",
          "Backup IPTV service",
          "Sports-focused playlist",
        ],
      },
      {
        type: "p",
        parts: [
          "Before adding additional playlists, check your current TiviMate version and ",
          {
            label: "TiviMate Premium features",
            href: blogPostPath(blogSlugs.premiumVsFree),
          },
          ".",
        ],
      },
      { type: "h2", text: "How to Update a TiviMate Playlist" },
      {
        type: "p",
        text: "If your IPTV provider changes the channel list, you may need to update the playlist.",
      },
      {
        type: "p",
        text: "Open your playlist settings and use the available update or refresh option.",
      },
      {
        type: "p",
        text: "If your provider has given you a new M3U URL or new Xtream Codes credentials, update the saved information accordingly.",
      },
      {
        type: "p",
        text: "Avoid deleting a working playlist immediately if you are simply trying to update its details. Check whether the playlist can be edited first.",
      },
      { type: "h2", text: "How to Remove a Playlist From TiviMate" },
      {
        type: "p",
        text: "If you no longer use an IPTV service, you can remove its playlist from TiviMate.",
      },
      {
        type: "p",
        text: "Open:",
      },
      {
        type: "note",
        text: "Settings → Playlists",
      },
      {
        type: "p",
        text: "Select the playlist you want to remove and use the available delete option.",
      },
      {
        type: "p",
        text: "Be careful when deleting a playlist because associated settings or organisation may also be removed.",
      },
      {
        type: "p",
        text: "If you may need the playlist again later, check whether your version offers an option to disable or hide it instead.",
      },
      { type: "h2", text: "Common TiviMate Playlist Errors" },
      {
        type: "table",
        headers: ["Problem", "Possible Cause", "What to Check"],
        rows: [
          [
            "Playlist will not load",
            "Incorrect URL",
            "Recheck the complete M3U URL",
          ],
          [
            "Login failed",
            "Incorrect credentials",
            "Check server, username and password",
          ],
          [
            "Channels missing",
            "Subscription issue",
            "Check what your IPTV plan includes",
          ],
          [
            "EPG missing",
            "EPG not supplied or incorrect",
            "Check your provider's EPG details",
          ],
          [
            "Channels buffer",
            "Network or stream issue",
            "Test your connection and another channel",
          ],
          [
            "Playlist stopped working",
            "Subscription or server change",
            "Contact your IPTV provider",
          ],
          [
            "Movies or series missing",
            "Service limitation",
            "Check your subscription details",
          ],
          [
            "TiviMate cannot connect",
            "Network or server issue",
            "Test internet and provider connection",
          ],
        ],
      },
      { type: "h2", text: "How to Get the IPTV Details You Need" },
      {
        type: "p",
        text: "If you already have an IPTV subscription, your provider should supply the information required to connect it to TiviMate.",
      },
      {
        type: "p",
        text: "This can include:",
      },
      {
        type: "ul",
        items: [
          "For M3U: M3U playlist URL",
          "For Xtream Codes: Server URL, Username, Password",
          "For EPG: EPG URL, if supplied",
        ],
      },
      {
        type: "p",
        parts: [
          "If you are looking for an IPTV subscription that can be used with TiviMate, you can review our available ",
          { label: "IPTV Plans for TiviMate", href: routes.plans },
          " and check the setup information provided with the selected service.",
        ],
      },
      {
        type: "p",
        text: "Only use IPTV content and services that you are authorised to access.",
      },
      { type: "h2", text: "TiviMate Playlist Setup Checklist" },
      {
        type: "p",
        text: "Before finishing your setup, check the following:",
      },
      {
        type: "ul",
        items: [
          "TiviMate is installed on a compatible device.",
          "Your IPTV subscription is active.",
          "You have the correct M3U URL or Xtream Codes details.",
          "You entered the credentials exactly as supplied.",
          "Your internet connection is working.",
          "Your playlist has loaded successfully.",
          "Your channels appear in the guide.",
          "Your EPG is configured if provided.",
          "You tested several channels.",
          "You saved your playlist information somewhere secure.",
        ],
      },
      { type: "h2", text: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "How do I add an M3U playlist to TiviMate?",
            answer:
              "Open TiviMate and go to Settings → Playlists → Add Playlist. Select the M3U playlist option, choose the URL method, and enter the complete M3U link provided by your IPTV service. Continue and allow TiviMate to load the playlist. Once loaded, check your channels and configure EPG information if your provider supplies it.",
          },
          {
            question: "How do I add Xtream Codes to TiviMate?",
            answer:
              "Open TiviMate → Settings → Playlists → Add Playlist and select Xtream Codes. Enter the server address, username and password provided by your IPTV service. Continue the setup and wait for TiviMate to authenticate your account and load the available content. Make sure all three details are entered exactly as supplied.",
          },
          {
            question:
              "What is the difference between M3U and Xtream Codes in TiviMate?",
            answer:
              "M3U normally uses a single playlist URL containing information about available streams. Xtream Codes uses separate server, username and password fields. Both can be used to connect compatible IPTV services to TiviMate. The method you should use depends mainly on which connection details your IPTV provider supplies.",
          },
          {
            question: "Why is my TiviMate playlist not loading?",
            answer:
              "A TiviMate playlist may fail to load because of an incorrect URL, incorrect login details, an expired subscription, an unavailable server or an internet connection problem. Recheck your M3U URL or Xtream Codes credentials first. If the information is correct, contact your IPTV provider to confirm that the service is active.",
          },
          {
            question: "Why are my TiviMate channels showing no information?",
            answer:
              '"No Information" usually means TiviMate has not received the required programme guide data. Check whether your IPTV provider supplies EPG information and whether the correct EPG details have been configured. EPG data depends on the content source, so TiviMate cannot display programme information that your IPTV service does not provide.',
          },
          {
            question: "Can I use TiviMate with an IPTV subscription?",
            answer:
              "Yes, TiviMate can be used with compatible IPTV services that provide supported playlist or login information. Your IPTV provider supplies the content and access details, while TiviMate acts as the player. Before subscribing, check that the provider supports a connection method compatible with your device and TiviMate version.",
          },
          {
            question: "Can I add multiple IPTV playlists to TiviMate?",
            answer:
              "Yes, TiviMate supports playlist management, with the exact number and advanced functionality depending on the current version and licence. Multiple playlists can be useful when you have more than one compatible IPTV service. If you need several playlists, check the current TiviMate Premium features before upgrading.",
          },
          {
            question: "Do I need an EPG to use TiviMate?",
            answer:
              "No, an EPG is not necessarily required for basic channel playback. EPG stands for Electronic Programme Guide and provides programme schedules and information. If your IPTV service supplies EPG data, adding it can make the TV guide more useful. The availability and accuracy of EPG information depend on the IPTV source.",
          },
        ],
      },
      { type: "h2", text: "Final Takeaway" },
      {
        type: "p",
        text: "Adding an IPTV playlist to TiviMate is usually straightforward once you have the correct information from your IPTV provider.",
      },
      {
        type: "p",
        text: "If you have an M3U URL, use the M3U playlist option and paste the complete URL.",
      },
      {
        type: "p",
        text: "If you have Xtream Codes, enter the server address, username and password separately.",
      },
      {
        type: "p",
        text: "After the playlist loads, check your channels, test playback and configure the EPG if your service provides one.",
      },
      {
        type: "p",
        parts: [
          "If you are still setting up your IPTV service, continue with our ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          " for the next steps. If you need an IPTV subscription compatible with TiviMate, you can also ",
          { label: "View IPTV Plans", href: routes.plans },
          ". If you still have a persistent setup problem, ",
          { label: "Contact our support team", href: routes.contact },
          ".",
        ],
      },
    ],
  },
  {
    slug: "tivimate-premium-vs-tivimate-free",
    title: "TiviMate Premium vs TiviMate Free: What Is Best to Choose?",
    description:
      "Compare TiviMate Premium vs Free for IPTV. Learn which features matter, whether Premium includes channels, and how to choose the right version.",
    excerpt:
      "Compare TiviMate Free and Premium features, convenience, and upgrade value before you decide which version fits your IPTV setup.",
    image: "/tivimate-premium-vs-free-comparison.png",
    imageAlt:
      "TiviMate Premium vs TiviMate Free comparison chart showing Free and Premium features",
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
    keywords: [
      "TiviMate Premium vs Free",
      "TiviMate Premium",
      "TiviMate Free",
      "TiviMate IPTV",
      "TiviMate Premium features",
      "Is TiviMate Premium worth it",
    ],
    content: [
      {
        type: "p",
        parts: [
          "If you are setting up TiviMate for IPTV, one of the first questions you may have is whether you should stay with the free version or upgrade to Premium. The difference is mainly about app features and convenience, not access to TV channels. For connecting your service, follow our guide on ",
          {
            label: "how to add a playlist to TiviMate",
            href: blogPostPath(blogSlugs.addPlaylist),
          },
          ".",
        ],
      },
      {
        type: "p",
        parts: [
          "TiviMate is an IPTV media player designed primarily for Android TV and remote-controlled devices. You add your own IPTV playlist, such as an M3U playlist or Xtream Codes connection, and TiviMate organises that content into a TV-friendly interface. Need the full player setup? Use the ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          ".",
        ],
      },
      {
        type: "p",
        text: "This guide explains TiviMate Premium vs Free, what each version is designed for, which features are associated with Premium, and what you should check before paying for an upgrade.",
      },
      { type: "h2", text: "Quick Answer" },
      {
        type: "p",
        text: "TiviMate Free can be used for basic IPTV playback, while TiviMate Premium is designed for users who want additional features such as advanced playlist management, recording, and multiview. The exact feature split can change between app versions, so check the Premium section inside the current TiviMate app before purchasing. TiviMate Premium does not provide IPTV channels or a separate IPTV subscription.",
      },
      { type: "h2", text: "What Is TiviMate?" },
      {
        type: "p",
        text: "TiviMate is an IPTV player for compatible Android TV devices. It does not supply TV channels itself. Instead, it lets you add your own IPTV playlists and organise them through a TV-focused interface.",
      },
      {
        type: "p",
        text: "The official Google Play listing says TiviMate supports common IPTV playlist formats including M3U, Xtream Codes and Stalker Portal. It also lists features such as an electronic programme guide (EPG), favourites, search, catch-up, recording, parental controls and multiview.",
      },
      {
        type: "p",
        parts: [
          "This distinction matters because buying TiviMate Premium does not mean buying an IPTV service. Your IPTV provider and your TiviMate Premium licence are separate. If you still need a subscription for TiviMate, review our ",
          { label: "IPTV Plans for TiviMate", href: routes.plans },
          ".",
        ],
      },
      { type: "h2", text: "TiviMate Premium vs Free at a Glance" },
      {
        type: "p",
        text: "The broad difference can be understood like this:",
      },
      {
        type: "table",
        headers: ["Feature", "TiviMate Free", "TiviMate Premium"],
        rows: [
          ["IPTV media player", "Yes", "Yes"],
          ["M3U playlists", "Yes", "Yes"],
          ["Xtream Codes", "Yes", "Yes"],
          ["TV guide / EPG", "Available", "Available"],
          ["Favourite channels", "Available", "Available"],
          ["Search", "Available", "Available"],
          [
            "Multiple playlists",
            "Feature availability should be checked in your version",
            "Commonly associated with Premium",
          ],
          [
            "Recording",
            "Limited or unavailable depending on current version",
            "Premium feature",
          ],
          [
            "Multiview",
            "Limited or unavailable depending on current version",
            "Premium feature",
          ],
          [
            "Catch-up",
            "Availability can depend on provider and version",
            "Supported where available",
          ],
          [
            "Parental controls",
            "Feature availability should be checked",
            "Available as a TiviMate feature",
          ],
          [
            "Backup and restore",
            "Check current version",
            "Commonly associated with Premium",
          ],
          ["IPTV channels included", "No", "No"],
        ],
      },
      {
        type: "note",
        text: "Important: TiviMate's official listing describes the application's overall features but does not publish a complete Free-versus-Premium matrix. Therefore, individual restrictions can change with app versions and platforms.",
      },
      { type: "h2", text: "What Features Does TiviMate Free Offer?" },
      {
        type: "p",
        text: "The Free version is intended for users who want to use TiviMate as an IPTV player without immediately paying for additional features.",
      },
      {
        type: "p",
        text: "You can use TiviMate to connect compatible IPTV playlists and watch the content supplied by your own IPTV provider.",
      },
      { type: "h3", text: "IPTV Playlist Support" },
      {
        type: "p",
        parts: [
          "TiviMate supports common playlist and login methods, including M3U and Xtream Codes. This allows users to bring an existing IPTV service into the player rather than purchasing channels from TiviMate itself. See the step-by-step guide: ",
          {
            label: "How to Add Playlist to TiviMate (M3U & Xtream Codes)",
            href: blogPostPath(blogSlugs.addPlaylist),
          },
          ".",
        ],
      },
      { type: "h3", text: "Electronic Programme Guide" },
      {
        type: "p",
        text: "The Electronic Programme Guide, or EPG, displays programme information in a TV-style guide.",
      },
      {
        type: "p",
        text: "The usefulness of the EPG depends partly on the data supplied by your IPTV provider. If the provider does not supply accurate programme information, changing TiviMate settings alone may not solve the problem.",
      },
      { type: "h3", text: "Favourites and Channel Organisation" },
      {
        type: "p",
        text: "TiviMate includes tools for organising channels and accessing favourites. This can make a large IPTV playlist easier to browse.",
      },
      { type: "h3", text: "Search" },
      {
        type: "p",
        text: "The official app listing also includes search functionality, allowing users to find channels and programmes more easily.",
      },
      { type: "h2", text: "What Does TiviMate Premium Add?" },
      {
        type: "p",
        text: "TiviMate Premium is aimed more at users who want additional control and convenience.",
      },
      {
        type: "p",
        text: "The features associated with Premium can include multiple playlist management, recording, multiview, and additional customisation. Independent TiviMate documentation also identifies recording and multiview as Premium features.",
      },
      { type: "h3", text: "Multiple Playlists" },
      {
        type: "p",
        text: "Multiple playlist support is useful if you use more than one IPTV source.",
      },
      {
        type: "p",
        text: "For example, you may have one playlist for general television and another for international or specialist content. Instead of repeatedly replacing your playlist information, multiple playlist management lets you keep compatible sources organised in the same application.",
      },
      {
        type: "p",
        text: "The exact playlist limit or availability should be checked against your current TiviMate version.",
      },
      { type: "h3", text: "Recording" },
      {
        type: "p",
        text: "Recording is one of the major reasons some users consider Premium.",
      },
      {
        type: "p",
        text: "If your setup and IPTV source support recording, TiviMate can be used to record programmes for later viewing. Storage requirements and recording reliability depend on the device, storage location, and stream.",
      },
      {
        type: "p",
        text: "Recording should not be confused with downloading channels from TiviMate. TiviMate remains a media player and does not supply the underlying content.",
      },
      { type: "h3", text: "Multiview" },
      {
        type: "p",
        text: "Multiview allows compatible streams to be displayed together on the same screen.",
      },
      {
        type: "p",
        text: "This can be particularly useful when watching multiple live events or channels. However, performance depends on your Android TV device, network connection, stream quality and the limits of your IPTV service.",
      },
      { type: "h3", text: "Backup and Restore" },
      {
        type: "p",
        text: "Backup and restore can be useful if you have spent time organising playlists, favourites and other settings.",
      },
      {
        type: "p",
        text: "Instead of rebuilding your setup from scratch after changing devices or reinstalling the application, a backup can help preserve your configuration. Exact availability should be confirmed in your current Premium version.",
      },
      { type: "h2", text: "Does TiviMate Premium Include IPTV Channels?" },
      {
        type: "p",
        text: "No. TiviMate Premium does not include IPTV channels, TV subscriptions, or media content.",
      },
      {
        type: "p",
        text: "This is one of the most important things to understand before upgrading.",
      },
      {
        type: "p",
        text: "TiviMate's official Google Play description explicitly states that it is a media player and that paid upgrades unlock application features only. The Premium upgrade does not provide channels, streams, or other media content.",
      },
      {
        type: "p",
        parts: [
          "You still need your own compatible IPTV source. Compare options on our ",
          { label: "IPTV Plans", href: routes.plans },
          " page, then connect them with our ",
          {
            label: "playlist setup guide",
            href: blogPostPath(blogSlugs.addPlaylist),
          },
          ".",
        ],
      },
      {
        type: "p",
        text: "In simple terms:",
      },
      {
        type: "ul",
        items: [
          "IPTV provider = supplies the content",
          "TiviMate = plays and organises the content",
          "TiviMate Premium = unlocks additional player features",
        ],
      },
      {
        type: "h2",
        text: "TiviMate Premium vs Free: Which Features Matter Most?",
      },
      {
        type: "p",
        text: "The right choice depends on how you use TiviMate.",
      },
      {
        type: "table",
        headers: ["Your Requirement", "What to Consider"],
        rows: [
          [
            "You only watch IPTV occasionally",
            "Free may provide enough functionality",
          ],
          [
            "You use one IPTV playlist",
            "Free may be sufficient for basic viewing",
          ],
          ["You need several IPTV playlists", "Check Premium availability"],
          [
            "You want to record programmes",
            "Premium is the relevant version to investigate",
          ],
          [
            "You want multiview",
            "Premium is the relevant option to investigate",
          ],
          [
            "You want more advanced organisation",
            "Premium may provide additional controls",
          ],
          ["You only need basic live viewing", "Free may be enough"],
          ["You think Premium includes channels", "It does not"],
        ],
      },
      {
        type: "p",
        text: 'This approach is more useful than simply asking whether Premium is "better". The important question is whether you will actually use the features that Premium adds.',
      },
      { type: "h2", text: "Is TiviMate Premium Worth It?" },
      {
        type: "p",
        text: "Whether TiviMate Premium is worthwhile depends on your viewing habits.",
      },
      {
        type: "p",
        text: "If you mainly watch live television from one IPTV playlist and do not need recording or multiview, the free version may cover your basic requirements.",
      },
      {
        type: "p",
        text: "If you regularly use multiple playlists, want to record programmes or use multiview, Premium becomes more relevant because these are among the features associated with the paid version.",
      },
      {
        type: "p",
        text: "There is no need to upgrade simply because you have TiviMate installed. First identify the feature you actually need.",
      },
      { type: "h2", text: "How Much Does TiviMate Premium Cost?" },
      {
        type: "p",
        text: "TiviMate pricing can vary according to the current purchase option, platform and region.",
      },
      {
        type: "p",
        text: "Because pricing can change, this article does not present an unverified fixed price as the current official price.",
      },
      {
        type: "note",
        text: "Current TiviMate Premium pricing: check the Premium purchase screen in the current TiviMate ecosystem before paying.",
      },
      {
        type: "p",
        text: "The safest approach is to check the Premium purchase screen in the current TiviMate ecosystem before paying.",
      },
      {
        type: "p",
        text: "The official TiviMate Companion app is specifically described as a tool for unlocking Premium functionality on devices without Google Play and for managing activated devices.",
      },
      {
        type: "h2",
        text: "How to Decide Between TiviMate Free and Premium",
      },
      {
        type: "p",
        text: "Use your actual viewing habits rather than the number of features listed on a comparison page.",
      },
      { type: "h3", text: "Choose Free If You:" },
      {
        type: "ul",
        items: [
          "Mainly watch live IPTV.",
          "Have a basic setup.",
          "Use a single IPTV source.",
          "Do not need recording.",
          "Do not need multiview.",
          "Want to test TiviMate before paying.",
        ],
      },
      { type: "h3", text: "Consider Premium If You:" },
      {
        type: "ul",
        items: [
          "Need multiple playlists.",
          "Want recording functionality.",
          "Want to use multiview.",
          "Need more advanced organisation.",
          "Regularly use TiviMate and want additional features.",
          "Want to make greater use of the application's power-user tools.",
        ],
      },
      { type: "h3", text: "Practical Example" },
      {
        type: "p",
        text: "Imagine you have one IPTV subscription and mainly watch news, entertainment and sports channels.",
      },
      {
        type: "p",
        text: "You add your playlist to TiviMate, use the programme guide and save your favourite channels. If those features meet your needs, there may be little reason to upgrade immediately.",
      },
      {
        type: "p",
        text: "Now consider a different setup. You use two IPTV playlists, regularly watch several sporting events and want to record selected programmes.",
      },
      {
        type: "p",
        text: "In that situation, Premium features become much more relevant because multiple playlist management, recording, and multiview address specific requirements.",
      },
      {
        type: "p",
        text: "The difference is therefore less about the number of features and more about whether those features solve a problem you actually have.",
      },
      { type: "h2", text: "TiviMate Free vs Premium: Pros and Cons" },
      {
        type: "table",
        headers: ["Version", "Advantages", "Considerations"],
        rows: [
          [
            "Free",
            "No Premium payment required, suitable for basic IPTV use, supports core player functionality",
            "Some advanced features may be restricted",
          ],
          [
            "Premium",
            "Adds access to additional power-user features",
            "Requires a separate Premium purchase",
          ],
          [
            "Both",
            "Use your own IPTV playlist, TV-focused interface and core playback features",
            "Neither version supplies IPTV channels",
          ],
        ],
      },
      { type: "h2", text: "Common Mistakes to Avoid" },
      { type: "h3", text: "1. Thinking Premium Includes Channels" },
      {
        type: "p",
        text: "It does not. TiviMate Premium is an application upgrade, not an IPTV subscription.",
      },
      {
        type: "h3",
        text: "2. Assuming Premium Fixes Every Buffering Problem",
      },
      {
        type: "p",
        text: "A Premium licence does not automatically improve your internet connection or IPTV provider's stream quality.",
      },
      {
        type: "p",
        text: "Buffering can involve your network, device, IPTV source, server performance and stream quality.",
      },
      {
        type: "h3",
        text: "3. Paying Before Checking the Features You Need",
      },
      {
        type: "p",
        text: "If you only require basic live viewing, check whether the free version already provides what you need.",
      },
      { type: "h3", text: "4. Using Unverified TiviMate Apps" },
      {
        type: "p",
        text: "There are applications with names similar to TiviMate.",
      },
      {
        type: "p",
        text: "Before installing or paying, check the developer and official listing carefully. The official Google Play listing identifies the developer as Armobsoft FZE.",
      },
      {
        type: "h3",
        text: "5. Assuming Every IPTV Feature Depends Only on TiviMate",
      },
      {
        type: "p",
        text: "Some features, particularly EPG and catch-up, depend on the IPTV source supplying the necessary data or streams.",
      },
      { type: "h2", text: "TiviMate Premium vs Free: Key Takeaways" },
      {
        type: "ul",
        items: [
          "TiviMate is an IPTV media player, not an IPTV channel provider.",
          "The Free version can handle basic IPTV playback.",
          "Premium is designed for users who need additional functionality.",
          "Recording and multiview are among the features associated with Premium.",
          "Multiple playlist support is another commonly documented Premium-related feature.",
          "Your IPTV subscription remains separate from TiviMate Premium.",
          "Premium does not provide channels or streams.",
          "Exact feature availability can change between versions, so check the current app before purchasing.",
          "The best choice depends on which features you actually need.",
        ],
      },
      { type: "h2", text: "Action Checklist" },
      {
        type: "p",
        text: "Before choosing between TiviMate Free and Premium:",
      },
      {
        type: "ol",
        items: [
          "Identify how many IPTV playlists you use.",
          "Check whether you need recording.",
          "Decide whether multiview is important to you.",
          "Check whether your IPTV provider supports catch-up.",
          "Check your device compatibility.",
          "Review the current Premium features in the app.",
          "Check the current price before purchasing.",
          "Confirm that you are using the official TiviMate application.",
          "Remember that TiviMate Premium does not include IPTV channels.",
        ],
      },
      { type: "h2", text: "Final Thoughts on TiviMate Premium vs Free" },
      {
        type: "p",
        text: "TiviMate Premium vs Free is ultimately a question of features rather than access to television content. Both versions are part of the same IPTV player ecosystem, while Premium adds functionality intended for users who want more control over their setup.",
      },
      {
        type: "p",
        text: "For basic IPTV viewing, the free version may be enough. Users who need features such as recording, multiview or multiple playlist management should examine Premium more closely.",
      },
      {
        type: "p",
        parts: [
          "Before purchasing, check the current Premium screen in the app because feature availability and pricing can change between versions. Most importantly, remember that TiviMate is only the player. Your IPTV provider remains responsible for supplying the channels and streams you add to the application. Next steps: follow the ",
          { label: "TiviMate IPTV Setup Guide", href: routes.installation },
          ", learn ",
          {
            label: "how to add a playlist to TiviMate",
            href: blogPostPath(blogSlugs.addPlaylist),
          },
          ", or ",
          { label: "View IPTV Plans", href: routes.plans },
          ". Need help? ",
          { label: "Contact our support team", href: routes.contact },
          ".",
        ],
      },
      { type: "h2", text: "FAQs" },
      {
        type: "faq",
        items: [
          {
            question: "Is TiviMate Free really free?",
            answer:
              "Yes. TiviMate has a free version that can be used for IPTV playback without purchasing Premium. The free version is intended for basic use, while additional features are associated with Premium. The exact restrictions can vary by app version, so users should check the current Premium section before deciding whether an upgrade is necessary.",
          },
          {
            question:
              "What is the main difference between TiviMate Premium and Free?",
            answer:
              "The main difference is access to additional application features. TiviMate Free is suitable for basic IPTV playback, while Premium is designed for users who want features such as recording, multiview and more advanced playlist management. Premium does not change the IPTV content available through your provider.",
          },
          {
            question: "Does TiviMate Premium include IPTV channels?",
            answer:
              "No. TiviMate Premium does not include IPTV channels, live streams or a television subscription. TiviMate describes itself as a media player. You must add your own compatible IPTV playlist or credentials from an IPTV content provider. The Premium upgrade only unlocks features within the TiviMate application.",
          },
          {
            question: "Can I use TiviMate without Premium?",
            answer:
              "Yes. You can use the free version of TiviMate for basic IPTV playback. Whether it is enough depends on the features you need. If you only watch live television and use basic playlist and guide functions, you may not need Premium. Users requiring additional features should check the current Premium options.",
          },
          {
            question: "Does TiviMate Premium support recording?",
            answer:
              "TiviMate lists recording as one of its application features, and independent TiviMate documentation identifies recording as a Premium feature. Recording also depends on your device, available storage and the IPTV stream. Check the current version of TiviMate before purchasing if recording is the main reason for your upgrade.",
          },
          {
            question: "Does TiviMate Premium support multiple playlists?",
            answer:
              "Multiple playlist support is listed among TiviMate's application features and is commonly associated with Premium. However, the official Google Play listing does not publish a complete Free-versus-Premium feature matrix. Check the current TiviMate Premium screen to confirm the exact playlist allowance for your version.",
          },
          {
            question: "Does TiviMate Premium improve IPTV buffering?",
            answer:
              "Not necessarily. Premium unlocks application features, but it does not automatically improve your internet connection or the quality of an IPTV provider's servers. Buffering can result from network speed, Wi-Fi performance, device limitations, stream quality or the IPTV provider. Premium should therefore not be purchased solely as a solution to buffering.",
          },
          {
            question: "Is TiviMate Premium worth paying for?",
            answer:
              "That depends on which features you use. If you only need basic IPTV playback, the free version may meet your requirements. If you need features such as recording, multiview or multiple playlist management, Premium may provide functionality that is relevant to your setup. Check the current features and price before purchasing.",
          },
        ],
      },
    ],
  },
];

export type BlogListingCard = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const blogListingCards: BlogListingCard[] = blogPosts.map((post) => ({
  title: post.title,
  excerpt: post.excerpt,
  href: `${routes.blog}/${post.slug}`,
  image: post.image,
  imageAlt: post.imageAlt,
}));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getRelatedBlogPosts(slug: string, limit = 2): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}

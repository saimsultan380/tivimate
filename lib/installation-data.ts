export const installationPageSeo = {
  title: "TiviMate IPTV Setup Guide – Install & Add IPTV",
  description:
    "Learn how to set up IPTV on TiviMate, add your playlist, configure EPG and troubleshoot common problems on Firestick and Android TV.",
  primaryKeyword: "TiviMate IPTV",
  keywords: [
    "TiviMate IPTV",
    "TiviMate IPTV setup",
    "TiviMate installation",
    "TiviMate IPTV installation",
    "how to install TiviMate",
    "how to add IPTV to TiviMate",
    "TiviMate Firestick",
    "TiviMate Android TV",
    "TiviMate IPTV login",
    "TiviMate Xtream Codes",
    "TiviMate M3U",
    "TiviMate EPG",
    "TiviMate IPTV setup guide",
    "IPTV on TiviMate",
  ],
} as const;

export const beforeStartingItems = [
  {
    title: "Compatible Device",
    body: "Use a compatible device supported by TiviMate.",
  },
  {
    title: "TiviMate",
    body: "Install the application using an appropriate official or supported distribution method.",
  },
  {
    title: "IPTV Subscription",
    body: "You’ll need the access information provided by your IPTV service.",
  },
] as const;

export const accessDetailItems = [
  "Username",
  "Password",
  "Server address",
  "M3U playlist URL",
  "Xtream Codes details",
  "EPG information",
] as const;

export const setupSteps = [
  {
    number: "1",
    title: "Open TiviMate",
    body: "Launch TiviMate on your compatible TV device. If this is your first time opening the application, follow the initial setup prompts.",
  },
  {
    number: "2",
    title: "Add Your Playlist",
    body: "Choose the option for adding a playlist. TiviMate can work with supported playlist formats and login methods depending on the application version and source.",
  },
  {
    number: "3",
    title: "Enter Your IPTV Details",
    body: "Use the information supplied with your IPTV subscription. Double-check every field. A small error in a username, password, URL or server address can prevent the playlist from loading.",
  },
  {
    number: "4",
    title: "Allow Your Playlist to Load",
    body: "After entering your details, allow the application to retrieve the available information. Depending on the service, this can include channel lists, categories, programme information, VOD sections, series and catch-up information.",
  },
  {
    number: "5",
    title: "Check Your Channels",
    body: "Once your playlist has loaded, open the channel list. Check categories, channel names, favorites, programme information and playback. If something is missing, first determine whether it is a TiviMate configuration issue or whether the content is not supplied by your IPTV service.",
  },
  {
    number: "6",
    title: "Configure Your EPG",
    body: "An EPG provides programme information and schedules. If your IPTV service supplies EPG information, configure it according to the details provided. If the EPG doesn’t appear, check that the supplied EPG information is correct and that the source actually provides programme data.",
  },
  {
    number: "7",
    title: "Create Your Favorites",
    body: "You don’t need to scroll through your entire playlist every time you want to watch a frequently used channel. Add your preferred channels to Favorites for quicker access.",
  },
  {
    number: "8",
    title: "Customize TiviMate",
    body: "Once your IPTV is working, take a few minutes to configure the player around your viewing habits. You can organize your available categories, adjust supported interface settings and create a cleaner viewing experience.",
  },
] as const;

export const loadPlaylistItems = [
  "Channel lists",
  "Categories",
  "Programme information",
  "VOD sections",
  "Series",
  "Catch-up information",
] as const;

export const channelCheckItems = [
  "Categories",
  "Channel names",
  "Favorites",
  "Programme information",
  "Playback",
] as const;

export const firestickFlow =
  "Install TiviMate → Open TiviMate → Add Playlist → Enter IPTV Details → Load Playlist → Configure EPG → Start Watching";

export const androidTvSteps = [
  "Install TiviMate.",
  "Open the application.",
  "Add your IPTV playlist.",
  "Enter your supplied details.",
  "Allow the playlist to load.",
  "Configure EPG.",
  "Add favorites.",
  "Test playback.",
] as const;

export const commonProblems = [
  {
    title: "Playlist Isn’t Loading",
    intro: "Check:",
    items: [
      "Internet connection",
      "Username",
      "Password",
      "Server URL",
      "Playlist URL",
      "Subscription status",
    ],
  },
  {
    title: "EPG Isn’t Working",
    intro: "Check:",
    items: [
      "EPG information supplied by your provider",
      "EPG URL",
      "Playlist configuration",
      "Whether programme data is actually available",
    ],
  },
  {
    title: "Channels Are Missing",
    intro: null,
    items: [
      "The channel may not be included in your IPTV subscription.",
      "Check your service information before assuming the player is responsible.",
    ],
  },
  {
    title: "IPTV Is Buffering",
    intro: "Try:",
    items: [
      "Restarting the application.",
      "Restarting your device.",
      "Checking your internet connection.",
      "Testing another available channel.",
      "Checking whether the issue affects all channels or only one source.",
    ],
    note: "If only particular streams are affected, the problem may originate from the source rather than your TiviMate installation.",
  },
] as const;

export const installationFaqs = [
  {
    question: "Does TiviMate provide IPTV?",
    answer:
      "No. TiviMate is a media player and requires compatible content sources.",
  },
  {
    question: "What is an M3U playlist?",
    answer:
      "An M3U playlist is a file or URL containing information used by compatible media players to access media streams.",
  },
  {
    question: "What are Xtream Codes?",
    answer:
      "Xtream Codes is a commonly used IPTV login method. Whether it is available depends on the IPTV service and player.",
  },
  {
    question: "What is EPG?",
    answer:
      "EPG stands for Electronic Programme Guide and provides programme scheduling information when supplied by the source.",
  },
  {
    question: "Why isn’t my playlist loading?",
    answer:
      "Check your internet connection, subscription status and every credential or URL you entered.",
  },
  {
    question: "Why are some channels missing?",
    answer:
      "The channels may not be included in the subscription or may currently be unavailable from the source.",
  },
] as const;

import {
    faBookmark,
    faChevronDown,
    faCircle,
    faCode,
    faFire,
    faHashtag,
    faTerminal
} from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons/faDotCircle";

const SideBarColors = [
    {
        SideBar: "linear-gradient(180deg, rgba(60,60,69,1) 50%, #28282c 100%)",
        PreviewThemeSideBar: "#323235",
        RadioButtonBackground: "#3c3c45",
        RadioButtonBorderColor: "1px solid #282c35",
        RadioTitle: "Nocturne",

        FontStyle: {
            FontWeight: "400",
            FontSize: '15px',
        },

        TextColors: {
            UserName: {
                UserNameColor: "#eaecf1",
            },
            SideBarTextColors: {
                titleColor: "#eceaeab3",
                itemColor: "#d1d6e2",
            }
        },

        IconStyle: {
            Icon: faDotCircle,
            IconTitle: faBookmark,
            IconColor: "#ffffff3b",
            ThemePalette: "#9bb9c5",
        }
    },
    {
        SideBar: "linear-gradient(180deg, #1b80d0 20%, #17609a 100%)",
        PreviewThemeSideBar: "#1764a0",
        RadioButtonBackground: "#43a7f7",
        RadioButtonBorderColor: "1px solid #43a7f7",
        RadioTitle: "Ocean",

        FontStyle: {
            FontWeight: "400",
            FontSize: '15px',
        },

        TextColors: {
            UserName: {
                UserNameColor: "#eaecf1",
            },
            SideBarTextColors: {
                titleColor: "#ffffff",
                itemColor: "#ffffffe8",
            }
        },

        IconStyle: {
            Icon: faDotCircle,
            IconTitle: faBookmark,
            IconColor: "#ffffff8c",
            ThemePalette: "#9bb9c5",
        }
    },
    {
        SideBar: "#ffffff",
        PreviewThemeSideBar: "#d1d1d1",
        RadioButtonBorderColor: "1px solid #9b9b9b",
        BackButtonBg: "#ff7a70",
        RadioTitle: "Light Red",

        FontStyle: {
            FontWeight: "500",
            FontSize: '15px',
        },

        TextColors: {
            UserName: {
                UserNameColor: "#4a4a4a",
            },
            SideBarTextColors: {
                titleColor: "#454545",
                itemColor: "#424242",
            }
        },

        IconStyle: {
            IconTitle: faCode,
            Icon: faDotCircle,
            IconTitleColor: "#ff6358",
            IconColor: "#ff6358de",
            ThemePalette: "#9bb9c5",
        }
    },
    {
        SideBar: "#3e495b",
        PreviewThemeSideBar: "#2c3849",
        RadioButtonBackground: "#3e495b",
        RadioButtonBorderColor: "1px solid #3e495b",
        RadioTitle: "Ochin",

        FontStyle: {
            FontWeight: "500",
            FontSize: '15px',
            Border: '1px solid #bdbdbd1c',
        },

        TextColors: {
            UserName: {
                UserNameColor: "#ffffff",
            },
            SideBarTextColors: {
                titleColor: "#ffffffd1",
                itemColor: "#c8cfda",
            }
        },

        IconStyle: {
            Icon: faDotCircle,
            IconTitle: faBookmark,
            IconColor: "#838998b8",
            ThemePalette: "#9bb9c5",
        }
    },
    {
        SideBar: "#4d394b",
        PreviewThemeSideBar: "#350d36",
        RadioButtonBackground: "#4d394b",
        RadioButtonBorderColor: "1px solid #4d394b",
        RadioTitle: "Aubergine",

        FontStyle: {
            FontWeight: "500",
            FontSize: '15px',
            Border: '1px solid #bdbdbd1c',
        },

        TextColors: {
            UserName: {
                UserNameColor: "#ffffff",
            },
            SideBarTextColors: {
                titleColor: "#ffffffd1",
                itemColor: "#c8cfda",
            }
        },

        IconStyle: {
            Icon: faDotCircle,
            IconTitle: faBookmark,
            IconColor: "#838998b8",
            ThemePalette: "#9bb9c5",
        }
    },
    {
        SideBar: "#ffeb84",
        PreviewThemeSideBar: "#ffc806",
        RadioButtonBackground: "#ffeb84",
        RadioButtonBorderColor: "1px solid rgb(255 208 42)",
        RadioTitle: "Banana",

        FontStyle: {
            FontWeight: "500",
            FontSize: '15px',
            Border: '1px solid #bdbdbd1c',
        },

        TextColors: {
            UserName: {
                UserNameColor: "#874428",
            },
            SideBarTextColors: {
                titleColor: "#874428",
                itemColor: "#874428",
            }
        },

        IconStyle: {
            Icon: faHashtag,
            IconTitle: faBookmark,
            IconColor: "#591035",
            ThemePalette: "#874428",
        }
    },
].map((item) => {
        return {
            SideBar: item.SideBar,
            PreviewThemeSideBar: item.PreviewThemeSideBar,
            RadioButtonBackground: item.RadioButtonBackground,
            RadioButtonBorderColor: item.RadioButtonBorderColor,
            BackButtonBg: item.BackButtonBg,
            RadioTitle: item.RadioTitle,

            // Font Style
            ItemFontWeight: item.FontStyle.ItemFontWeight,
            FontWeight: item.FontStyle.FontWeight,
            FontSize: item.FontStyle.FontSize,
            Border: item.FontStyle.Border,

            // Text Style
            UserNameColor: item.TextColors.UserName.UserNameColor,
            TitleColor: item.TextColors.SideBarTextColors.titleColor,
            ItemColor: item.TextColors.SideBarTextColors.itemColor,

            // Icons Style
            IconTitle: item.IconStyle.IconTitle,
            IconTitleColor: item.IconStyle.IconTitleColor,
            IconColor: item.IconStyle.IconColor,
            ThemePalette: item.IconStyle.ThemePalette,
            Icon: item.IconStyle.Icon,
        }
    }
)

export default SideBarColors;

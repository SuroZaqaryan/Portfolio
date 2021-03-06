import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons/faDotCircle";

const GradientThemes = [
    {
        SideBar: "linear-gradient(180deg, rgba(66, 116, 131, 1) 0%, rgba(69, 75, 88, 1) 100%)",
        PreviewThemeSideBar: "#355666",
        PageContent: "linear-gradient(180deg,rgba(65,116,130,1) 0%, #353a4f 80%)",
        RadioButtonBackground: "linear-gradient(40deg, #51adff, #10f4a0)",
        RadioButtonBorderColor: "1px solid #33b7de",
        RadioTitle: "Ochin",

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
            IconTitle: faHashtag,
            IconColor: "#ffffff3b",
            ThemePalette: "#9bb9c5",
        }
    },
    {
        SideBar: "linear-gradient(180deg, rgb(146 93 116) 0%, rgb(71 75 88) 100%)",
        PreviewThemeSideBar: "#5f4055",
        PageContent: "linear-gradient(180deg, rgb(147 99 123) 0%, rgb(55 58 80) 80%)",
        RadioButtonBackground: "linear-gradient(120deg,#ffb2b2 0,#f68084 100%)",
        RadioButtonBorderColor: "1px solid #ff8185fa",
        RadioTitle: "Ochin",

        FontStyle: {
            FontWeight: "400",
            FontSize: '15px',
        },

        TextColors: {
            UserName: {
                UserNameColor: "#eaecf1",
            },
            SideBarTextColors: {
                titleColor: "#dfdfdfcc",
                itemColor: "#d1d6e2",
            }
        },

        IconStyle: {
            Icon: faDotCircle,
            IconTitle: faHashtag,
            IconColor: "#ffffff47",
            ThemePalette: "#9bb9c5",
        }
    },
    {
        SideBar: "linear-gradient(180deg, rgb(96 110 150) 0%, rgb(69 75 88) 100%)",
        PreviewThemeSideBar: "#3e4964",
        PageContent: "linear-gradient(180deg, rgb(94 110 149) 0%, rgb(53 58 80) 80%)",
        RadioButtonBackground: "linear-gradient(40deg, rgb(48 137 198), rgb(161 186 255))",
        RadioButtonBorderColor: "1px solid #818db0",
        RadioTitle: "Ochin",

        FontStyle: {
            FontWeight: "400",
            FontSize: '15px',
        },

        TextColors: {
            UserName: {
                UserNameColor: "#eaecf1",
            },
            SideBarTextColors: {
                titleColor: "#c7d3f0",
                itemColor: "#d1d6e2",
            }
        },

        IconStyle: {
            Icon: faDotCircle,
            IconTitle: faHashtag,
            IconColor: "#99adbce0",
            ThemePalette: "#c7cee1",
        }
    },

].map((item) => {
    return {
        SideBar: item.SideBar,
        PreviewThemeSideBar: item.PreviewThemeSideBar,
        PageContent: item.PageContent,
        RadioButtonBackground: item.RadioButtonBackground,
        RadioButtonBorderColor: item.RadioButtonBorderColor,
        RadioTitle: item.RadioTitle,

        // Font Style
        FontWeight: item.FontStyle.FontWeight,
        FontSize: item.FontStyle.FontSize,

        // Text Style
        UserNameColor: item.TextColors.UserName.UserNameColor,
        TitleColor: item.TextColors.SideBarTextColors.titleColor,
        ItemColor: item.TextColors.SideBarTextColors.itemColor,

        // Icons Style
        IconTitle: item.IconStyle.IconTitle,
        IconColor: item.IconStyle.IconColor,
        ThemePalette: item.IconStyle.ThemePalette,
        Icon: item.IconStyle.Icon,
    }
}
)

export default GradientThemes;

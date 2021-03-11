import {faSlack} from "@fortawesome/free-brands-svg-icons";
import {faList} from "@fortawesome/free-solid-svg-icons";

const SideBarBackgrounds = [
    {
        SideBarWallpaper: `right / cover url("https://www.setaswall.com/wp-content/uploads/2017/05/Minimal-Phone-Wallpaper-216-1080x2340.jpg")`,
        WallpaperIcon: faList,
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `top / cover url("https://images-na.ssl-images-amazon.com/images/I/81gs51b0vmL.jpg")`,
        WallpaperIcon: faList,
        TitleColor: "#00000021",
        background: "#00000040",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://www.setaswall.com/wp-content/uploads/2019/08/Whatsapp-Wallpaper-065-768x1365.jpg")`,
        WallpaperIcon: faList,
        TitleColor: "#0707070a",
        background: "#00000054",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp4100236.jpg")`,
        WallpaperIcon: faList,
        TitleColor: "#0707070a",
        background: "#00000026",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp6923584.jpg")`,
        WallpaperIcon: faList,
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp6923586.jpg")`,
        WallpaperIcon: faList,
        TitleColor: "#0707070a",
        background: "#00000017",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp6923765.jpg")`,
        WallpaperIcon: faList,
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `left / cover url("https://wallpapercave.com/wp/wp7692889.jpg")`,
        WallpaperIcon: faList,
        WallpaperIconColor: "#2d2d2d",
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "black",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp7692892.png")`,
        WallpaperIcon: faList,
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp7692899.png")`,
        WallpaperIcon: faList,
        WallpaperIconColor: "#2d2d2d",
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "black",
    },
].map((item) => {
        return {
            SideBarWallpaper: item.SideBarWallpaper,
            WallpaperIconColor: item.WallpaperIconColor,
            WallpaperIcon: item.WallpaperIcon,
            TitleColor: item.TitleColor,
            background: item.background,
            color: item.color,
        }
    }
)

export default SideBarBackgrounds;
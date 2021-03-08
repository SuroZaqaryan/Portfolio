const SideBarBackgrounds = [
    {
        SideBarWallpaper: `right / cover url("https://www.setaswall.com/wp-content/uploads/2017/05/Minimal-Phone-Wallpaper-216-1080x2340.jpg")`,
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `top / cover url("https://images-na.ssl-images-amazon.com/images/I/81gs51b0vmL.jpg")`,
        TitleColor: "#00000021",
        background: "#00000040",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://www.setaswall.com/wp-content/uploads/2019/08/Whatsapp-Wallpaper-065-768x1365.jpg")`,
        TitleColor: "#0707070a",
        background: "#00000054",
        color: "white",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp4100236.jpg")`,
        TitleColor: "#0707070a",
        background: "#00000026",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp6923584.jpg")`,
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp6923586.jpg")`,
        TitleColor: "#0707070a",
        background: "#00000017",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp6923765.jpg")`,
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `left / cover url("https://wallpapercave.com/wp/wp7692889.jpg")`,
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "black",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp7692892.png")`,
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "#ffffff",
    },
    {
        SideBarWallpaper: `center / cover url("https://wallpapercave.com/wp/wp7692899.png")`,
        TitleColor: "#0707070a",
        background: "#ffffff00",
        color: "black",
    },
].map((item) => {
        return {
            SideBarWallpaper: item.SideBarWallpaper,
            TitleColor: item.TitleColor,
            background: item.background,
            color: item.color,
        }
    }
)

export default SideBarBackgrounds;
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "家中酒单，1955 至 1997 私人年份藏酒";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [photoData, fontFile] = await Promise.all([
    readFile(join(process.cwd(), "public/wines/22/Chateau Pape Clement 1955.jpg"), "base64"),
    readFile(join(process.cwd(), "assets/fonts/NotoSerifSC-Share.otf"))
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
          color: "#fff8ed",
          background: "#1a0e10",
          fontFamily: "Noto Serif SC"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "47%",
            height: "100%",
            display: "flex",
            overflow: "hidden"
          }}
        >
          <img
            src={photoSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 48%"
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            background: "linear-gradient(90deg, #1a0e10 0%, #241113 47%, rgba(26,14,16,0.9) 58%, rgba(26,14,16,0.05) 82%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 58,
            bottom: 58,
            left: 64,
            width: 2,
            display: "flex",
            background: "#a88755"
          }}
        />
        <div
          style={{
            position: "relative",
            width: "63%",
            height: "100%",
            padding: "56px 62px 52px 92px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#c7a875",
              fontSize: 22,
              letterSpacing: "0.16em"
            }}
          >
            私人年份藏酒
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                color: "rgba(255,248,237,0.66)",
                fontSize: 30,
                letterSpacing: "0.08em"
              }}
            >
              1955—1997
            </div>
            <div
              style={{
                marginTop: 16,
                display: "flex",
                fontSize: 92,
                lineHeight: 1,
                letterSpacing: "-0.05em"
              }}
            >
              家中酒单
            </div>
            <div
              style={{
                marginTop: 24,
                display: "flex",
                color: "rgba(255,248,237,0.76)",
                fontSize: 28,
                letterSpacing: "0.04em"
              }}
            >
              30 瓶私人年份藏酒
            </div>
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(255,248,237,0.62)",
              fontSize: 21,
              letterSpacing: "0.09em"
            }}
          >
            出生年份 · 纪念年份 · 一段旧时光
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Noto Serif SC",
          data: fontFile,
          style: "normal",
          weight: 400
        }
      ]
    }
  );
}

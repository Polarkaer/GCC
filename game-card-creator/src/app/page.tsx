"use client";

import Image from "next/image";
import { useState } from "react";

enum CardType {
  Attact = "A",
  Block = "B",
  Heal = "H",
}

export default function Home() {
  const [cardType, setCardType] = useState<CardType>(CardType.Attact);
  const [cardStats, setCardStats] = useState<number>(3);
  const [cardHeaderHeight, setCardHeaderHeight] = useState(4);
  const [cardName, setCardName] = useState("Card Name");
  const [cardAspectRatio, setCardAspectRatio] = useState(1.4);
  const [cardWidth, setCardWidth] = useState(250);
  const [cardHeight, setCardHeight] = useState(cardAspectRatio * cardWidth);
  const [cardPadding, setCardPadding] = useState(6);
  const [cardBorderSize, setCardBorderSize] = useState(2);
  const [cardBorderRadius, setCardBorderRadius] = useState(12);
  // Image
  const [imageUrl, setImageUrl] = useState("/placeholder-image.png");
  const [imageWidth, setImageWidth] = useState(
    cardWidth - (cardPadding + cardBorderSize) * 2,
  );
  const [imageHeight, setImageHeight] = useState(cardHeight - cardPadding * 2);

  return (
    <div className="page-container">
      <nav>
        <h1>Game Card Creator</h1>
      </nav>
      <main>
        <section className="card-preview">
          <div
            className="card-main"
            style={{
              width: cardWidth,
              height: cardHeight,
              padding: cardPadding,
              borderWidth: cardBorderSize,
              borderRadius: cardBorderRadius,
              display: "grid",
              gridTemplateRows: `1fr 4fr`,
              backgroundColor: "#fff",
            }}
          >
            <div
              className="header"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: `1px solid #fff`,
                borderRadius: `${cardBorderRadius / 2}px ${cardBorderRadius / 2}px 0 0`,
                backgroundColor: "oklch(62.3% 0.214 259.815)",
              }}
            >
              <div className="card-name">{cardName}</div>
              {/* <div className="card-type">{cardType}</div> */}
              <div className="card-stats">{cardStats}</div>
            </div>
            <div
              className="card-image"
              style={{
                position: "relative",
                width: imageWidth,
                backgroundColor: "oklch(62.3% 0.214 259.815)",
              }}
            >
              <Image src={imageUrl} alt="Card Image Placeholder" fill />
            </div>
          </div>
        </section>
        <aside className="card-editor">
          Game Card Editor Placeholder
          <div className="editor-fields">
            <div>
              <label>Card Name:</label>
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            <div>
              <label>Card Type:</label>
              <select value={cardType} onChange={(e) => setCardType(e.target.value as CardType)}>
                <option value={CardType.Attact}>Attack</option>
                <option value={CardType.Block}>Block</option>
                <option value={CardType.Heal}>Heal</option>
              </select>
            </div>
            <div>
              <label>Card Stats:</label>
              <input
                type="number"
                value={cardStats}
                onChange={(e) => setCardStats(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Image URL:</label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div>
              <label>Card Width:</label>
              <input
                type="number"
                value={cardWidth}
                onChange={(e) => setCardWidth(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Card Aspect Ratio:</label>
              <input
                type="number"
                value={cardAspectRatio}
                onChange={(e) => setCardAspectRatio(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Card Padding:</label>
              <input
                type="number"
                value={cardPadding}
                onChange={(e) => setCardPadding(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Card Border Size:</label>
              <input
                type="number"
                value={cardBorderSize}
                onChange={(e) => setCardBorderSize(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Card Border Radius:</label>
              <input
                type="number"
                value={cardBorderRadius}
                onChange={(e) => setCardBorderRadius(Number(e.target.value))}
              />
            </div>
          </div>
        </aside>
      </main>
      <footer>
        <p>© 2026 Game Card Creator. All rights reserved.</p>
      </footer>
    </div>
  );
}

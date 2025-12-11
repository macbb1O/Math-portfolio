import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  color: string;
  rotation: number;
}

export function Confetti({ show }: { show: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (show) {
      const colors = [
        "hsl(320, 85%, 60%)",
        "hsl(200, 90%, 55%)",
        "hsl(280, 80%, 65%)",
        "hsl(45, 95%, 55%)",
        "hsl(140, 75%, 50%)",
        "hsl(180, 80%, 55%)",
      ];

      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 50; i++) {
        newPieces.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
        });
      }
      setPieces(newPieces);

      const timer = setTimeout(() => setPieces([]), 3500);
      return () => clearTimeout(timer);
    } else {
      setPieces([]);
    }
  }, [show]);

  if (!show || pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" data-testid="confetti">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
          }}
        />
      ))}
    </div>
  );
}

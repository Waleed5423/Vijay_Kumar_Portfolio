"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bug as BugIcon, Zap, Trophy } from "lucide-react";

interface Bug {
  id: number;
  x: number;
  y: number;
  squashed: boolean;
}

interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const BugGameClient = () => {
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [circles, setCircles] = useState<Circle[]>([]);

  const spawnBug = () => {
    if (!gameActive) return;

    const newBug: Bug = {
      id: Date.now(),
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      squashed: false,
    };

    setBugs((prev) => [...prev, newBug]);

    setTimeout(() => {
      setBugs((prev) => prev.filter((b) => b.id !== newBug.id));
    }, 2000 + Math.random() * 2000);
  };

  const createCircle = (x: number, y: number) => {
    const newCircle: Circle = {
      id: Date.now(),
      x,
      y,
      size: 10,
      opacity: 1,
    };
    setCircles((prev) => [...prev, newCircle]);
  };

  useEffect(() => {
    if (circles.length === 0) return;

    const interval = setInterval(() => {
      setCircles((prev) =>
        prev
          .map((circle) => ({
            ...circle,
            size: circle.size + 2,
            opacity: circle.opacity - 0.03,
          }))
          .filter((circle) => circle.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [circles]);

  useEffect(() => {
    if (!gameActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameActive(false);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive]);

  useEffect(() => {
    if (!gameActive) return;

    const bugInterval = setInterval(spawnBug, 800);
    return () => clearInterval(bugInterval);
  }, [gameActive]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setBugs([]);
    setCircles([]);
    setGameActive(true);
    setGameOver(false);
  };

  const squashBug = (id: number, x: number, y: number) => {
    if (!gameActive) return;

    setBugs((prev) =>
      prev.map((bug) => (bug.id === id ? { ...bug, squashed: true } : bug))
    );
    setScore((prev) => prev + 10);
    createCircle(x, y);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-amber-500" />
          <span className="font-semibold">Score: {score}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`font-semibold ${
              timeLeft < 10 ? "text-rose-500" : "text-slate-600"
            }`}
          >
            Time: {timeLeft}s
          </span>
        </div>
        <Button
          onClick={startGame}
          disabled={gameActive}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
        >
          {gameOver ? "Play Again" : gameActive ? "Game Running" : "Start Game"}
        </Button>
      </div>

      <div className="relative h-96 w-full bg-slate-50/50 border border-slate-200 rounded-xl overflow-hidden">
        {!gameActive && !gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/70 backdrop-blur-sm">
            <BugIcon className="h-12 w-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Click Start to Hunt Bugs!
            </h3>
            <p className="text-slate-600 max-w-md text-center">
              Click or tap on the bugs as they appear to score points. Each bug
              is worth 10 points!
            </p>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/70 backdrop-blur-sm">
            <Trophy className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Game Over! Final Score: {score}
            </h3>
            <p className="text-slate-600 mb-4">
              You squashed {score / 10} bugs!
            </p>
            <Button
              onClick={startGame}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              Play Again
            </Button>
          </div>
        )}

        {circles.map((circle) => (
          <div
            key={circle.id}
            className="absolute rounded-full bg-blue-400/30 border-2 border-blue-500/50 pointer-events-none"
            style={{
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              opacity: circle.opacity,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {bugs.map((bug) => (
          <button
            key={bug.id}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              squashBug(bug.id, x, y);
            }}
            className={`absolute transition-all duration-150 ${
              bug.squashed ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
            style={{
              left: `${bug.x}%`,
              top: `${bug.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <BugIcon
              className={`h-10 w-10 ${
                bug.squashed ? "text-rose-700" : "text-rose-500"
              } transition-colors`}
            />
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
          <span className="text-sm font-medium text-slate-700">Pro Tip:</span>
          <span className="text-sm text-slate-600">
            Watch for the ripple effect when you hit bugs!
          </span>
        </div>
      </div>
    </div>
  );
};

export default BugGameClient;

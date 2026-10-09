import React, { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';
import confetti from 'canvas-confetti';
import { SIMULATION_TASKS } from '../data/portfolioData';
import { SimulationTask } from '../types/portfolio';
import { Gauge, Sliders, AlertTriangle, CheckCircle, Shield, RefreshCw, Cpu, Zap, Activity } from 'lucide-react';

export const MachineSimulator: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<SimulationTask>(SIMULATION_TASKS[0]);
  const [machineSpeed, setMachineSpeed] = useState<number>(420);
  const [pressureBar, setPressureBar] = useState<number>(6.2);
  const [sealTemp, setSealTemp] = useState<number>(145);
  const [cyberProtectionActive, setCyberProtectionActive] = useState<boolean>(true);
  
  const [isResolving, setIsResolving] = useState<boolean>(false);
  const [resolutionProgress, setResolutionProgress] = useState<number>(0);
  const [isResolved, setIsResolved] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);

  // Animated Waveform Canvas using requestAnimationFrame
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let step = 0;

    const render = () => {
      step += 0.05;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Grid background
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Live Telemetry Wave 1 (Mechanical Vibration / Line Frequency)
      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = isResolved ? '#10b981' : isResolving ? '#06b6d4' : '#f59e0b';

      const amplitude = isResolved ? 12 : isResolving ? 22 : 32;
      const frequency = machineSpeed / 120;

      for (let x = 0; x < width; x++) {
        const y =
          height / 2 +
          Math.sin(x * 0.03 * frequency + step) * amplitude +
          Math.cos(x * 0.015 + step * 0.7) * (amplitude * 0.4);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Live Telemetry Wave 2 (Cyber OT Telemetry Packets)
      if (cyberProtectionActive) {
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.65)';
        for (let x = 0; x < width; x += 4) {
          const y =
            height / 2 +
            Math.sin(x * 0.05 + step * 1.5) * 8 +
            Math.cos(x * 0.08 - step) * 6;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [machineSpeed, isResolving, isResolved, cyberProtectionActive]);

  // Handle Scenario Switch
  const handleSelectTask = (task: SimulationTask) => {
    setSelectedTask(task);
    setIsResolved(false);
    setResolutionProgress(0);
  };

  // Run Anime.js powered diagnostic sequence
  const handleResolveIssue = () => {
    if (isResolving) return;
    setIsResolving(true);
    setIsResolved(false);
    setResolutionProgress(0);

    const progressObj = { value: 0 };

    animate(progressObj, {
      value: 100,
      duration: 2200,
      ease: 'inOutCubic',
      onUpdate: () => {
        setResolutionProgress(Math.round(progressObj.value));
      },
      onComplete: () => {
        setIsResolving(false);
        setIsResolved(true);
        // Trigger celebratory confetti upon calibration resolution!
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#06b6d4', '#10b981', '#f59e0b', '#8b5cf6'],
        });
      },
    });
  };

  const handleReset = () => {
    setIsResolved(false);
    setIsResolving(false);
    setResolutionProgress(0);
    setMachineSpeed(420);
    setPressureBar(6.2);
    setSealTemp(145);
  };

  return (
    <section id="simulation" className="py-20 border-t border-slate-800/80 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>02</span>
            <span>·</span>
            <span>Interactive Simulator</span>
            <span>·</span>
            <span>Gdx2 & OT Security Workbench</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Interactive Industrial Diagnostics Lab
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            Test the operational protocols Anher uddin Piyal applies every shift.
            Select a live machinery malfunction or OT security anomaly, adjust control loop parameters,
            and execute precision troubleshooting routines.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scenario Selector & Live Controls */}
          <div className="lg:col-span-5 space-y-6">
            {/* Scenario Picker */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Select Real-World Incident
                </span>
                <span className="text-[11px] font-mono text-cyan-400">4 Scenarios</span>
              </div>

              <div className="space-y-2">
                {SIMULATION_TASKS.map((task) => {
                  const isCurrent = task.id === selectedTask.id;
                  return (
                    <button
                      key={task.id}
                      onClick={() => handleSelectTask(task)}
                      className={`w-full text-left p-3 rounded-xl transition-all border ${
                        isCurrent
                          ? 'bg-slate-850 border-cyan-500/80 shadow-md shadow-cyan-500/10'
                          : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span
                          className={`font-semibold ${
                            isCurrent ? 'text-cyan-400' : 'text-slate-300'
                          }`}
                        >
                          {task.title}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {task.system}
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-400 mt-1 line-clamp-1">
                        {task.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Industrial Sliders & Tuning Rack */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Live System Parameters
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Loop</span>
                </button>
              </div>

              {/* Slider 1: Speed */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Packaging Speed (Packs/Min)</span>
                  <span className="text-cyan-400 font-bold">{machineSpeed} ppm</span>
                </div>
                <input
                  type="range"
                  min="240"
                  max="520"
                  value={machineSpeed}
                  onChange={(e) => setMachineSpeed(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>240 Slow Infeed</span>
                  <span>420 Nominal Gdx2</span>
                  <span>520 Peak</span>
                </div>
              </div>

              {/* Slider 2: Pressure */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Pneumatic Supply Pressure</span>
                  <span className="text-emerald-400 font-bold">{pressureBar.toFixed(1)} bar</span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="8.0"
                  step="0.1"
                  value={pressureBar}
                  onChange={(e) => setPressureBar(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>4.0 Low Danger</span>
                  <span>6.0–6.5 Optimal</span>
                  <span>8.0 High</span>
                </div>
              </div>

              {/* Slider 3: Heater Temperature */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Sealing Bar Temperature</span>
                  <span className="text-amber-400 font-bold">{sealTemp} °C</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="180"
                  value={sealTemp}
                  onChange={(e) => setSealTemp(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>120° Underseal</span>
                  <span>145° Ideal PP Wrap</span>
                  <span>180° Scorch Risk</span>
                </div>
              </div>

              {/* Toggle: Cyber Protection Guard */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <div className="text-xs">
                    <div className="text-slate-300 font-medium">OT SCADA Network Shield</div>
                    <div className="text-[10px] text-slate-500 font-mono">VLAN Isolation & ACL Inspection</div>
                  </div>
                </div>
                <button
                  onClick={() => setCyberProtectionActive(!cyberProtectionActive)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                    cyberProtectionActive
                      ? 'bg-purple-600/30 text-purple-300 border border-purple-500/50'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {cyberProtectionActive ? 'Shield: Active' : 'Shield: Bypassed'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Telemetry & Resolution Terminal */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Waveform Telemetry Visualizer */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Oscilloscope Telemetry Monitor
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className={`w-2 h-2 rounded-full ${isResolved ? 'bg-emerald-400' : isResolving ? 'bg-cyan-400 animate-ping' : 'bg-amber-400'}`} />
                    <span>{isResolved ? 'Calibrated' : isResolving ? 'Diagnosing' : 'Alert Flagged'}</span>
                  </span>
                </div>
              </div>

              {/* HTML5 Canvas Telemetry */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <canvas
                  ref={canvasRef}
                  width={560}
                  height={130}
                  className="w-full h-[130px] block"
                />
                <div className="absolute top-2 left-3 text-[10px] font-mono text-slate-400 flex items-center gap-2">
                  <span>CH1: Mechanical Harmonic</span>
                  <span>·</span>
                  <span>CH2: SCADA Packet Frequency</span>
                </div>
              </div>

              {/* Active Incident Details */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Detected Symptom: <span className="text-amber-300">{selectedTask.symptom}</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-1">{selectedTask.description}</div>
                  </div>
                </div>
              </div>

              {/* Progress and Action Execution */}
              {isResolving && (
                <div className="space-y-2 py-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-cyan-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 animate-spin" />
                      <span>Executing Piyal&apos;s Calibration Routine...</span>
                    </span>
                    <span className="text-cyan-300 font-bold">{resolutionProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full transition-all duration-75"
                      style={{ width: `${resolutionProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Resolution Report Card if resolved */}
              {isResolved && (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-2 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Issue Successfully Cleared & Calibrated</span>
                  </div>
                  <div className="text-xs text-slate-200">
                    <strong className="text-emerald-300">Procedure: </strong>
                    {selectedTask.solution}
                  </div>
                  <div className="text-xs text-slate-300 pt-1 border-t border-emerald-900/40">
                    <strong className="text-cyan-300">Plant Impact: </strong>
                    {selectedTask.impact}
                  </div>
                </div>
              )}

              {/* Execution CTA Button */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleResolveIssue}
                  disabled={isResolving || isResolved}
                  className={`flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    isResolved
                      ? 'bg-emerald-900/40 border border-emerald-700/60 text-emerald-300 cursor-default'
                      : isResolving
                      ? 'bg-cyan-900/50 border border-cyan-700 text-cyan-200 cursor-wait'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 cursor-pointer'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>
                    {isResolved
                      ? 'System Restored & Optimized'
                      : isResolving
                      ? 'Executing Diagnostic Sequence...'
                      : 'Diagnose & Execute Repair Protocol'}
                  </span>
                </button>
              </div>
            </div>

            {/* Quick Spec Card: Gdx2 Technical Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-xs font-mono text-slate-400">Gdx2 Max Rated</div>
                <div className="text-base font-bold text-white font-mono mt-0.5">500 ppm</div>
                <div className="text-[10px] text-cyan-400">High-speed packaging</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-xs font-mono text-slate-400">Air Line Pressure</div>
                <div className="text-base font-bold text-white font-mono mt-0.5">6.0 Bar</div>
                <div className="text-[10px] text-emerald-400">Regulated pneumatic</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-xs font-mono text-slate-400">BAT Quality Tier</div>
                <div className="text-base font-bold text-white font-mono mt-0.5">100% QA</div>
                <div className="text-[10px] text-amber-400">Zero defect tolerance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

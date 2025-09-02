import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "../elements/Icon";

const slides = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFHnF2YgL0e-c-G5N9-mYh6hWc-k-LgP8m3bI-O0n-yI3y_y_d7qA-yP7x-fG_gGz_wE_w-p-c-k-q_w-c-LgP8m3bI-O0n-yI3y_y_d7qA-yP7x-fG_gGz_wE_w-p-c-k-q_w=w1200-h630-p-k-no-nu",
    title: "50% Off All Cooking Courses",
    desc: "Boost your culinary skills today!",
    cta: "Learn More",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDjniJlmxMi7b-oB_8sjuSATkUHfeL21k5m2Mqd9zeS18rfr9WURcDyzeEkV_324WCYUu0T4REO53p9N_sZ_ZCDshScUKx8g5i6iJ6GaA9qRoXCeZT64C5Yq65zjBCLFp-NE-XmkoBA68ZQP2Xqh3-xXdpXIdtMgatYomLqcxx83_MRrhiyXQcxGjiNjrVVmqlfWrxDzQ27ztQeMnpLYBJHIzI78MfeliguPoiyAwJA7D1dormLouVvyp38l-MyxTSTS7CzuxkU1KO",
    title: "Special Offer on Web Development Courses",
    desc: "Build your career in tech.",
    cta: "Explore Now",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHrvuNync_nTfcbA8iztllr7QKztBcoVpacwu54RVKBswSfbItkTVJlz3hT84f_fPd19JQbWdWflKUR5QZhd8dnNvJ9PbUD467CPGDlp32MM7J2zKjZGdvNcFnBnUSg769Z3vxEf62UlUqigg401KvZvlTFSSHmkqrf6s3avv9qjWvIxYKX5cP8AMXFIbF6THqs5CLCJ66iZ9y9vN6xDJi6RYXOdodIArH96v7OdGhL42jSmFEiKnMxg0BQ2A_M4g3wW6O0qXmMdU-",
    title: "Become a Professional Photographer",
    desc: "Enroll now and get exclusive bonuses.",
    cta: "Enroll Now",
  },
];

export default function Carousel() {
  const total = slides.length;
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  const translate = useMemo(() => `translateX(-${idx * 100}%)`, [idx]);

  const go = (n) => setIdx((v) => (v + n + total) % total);
  const goTo = (n) => setIdx(((n % total) + total) % total);

  const start = () => {
    stop();
    timer.current = setInterval(() => go(1), 5000);
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative mb-6 w-full">
      <div
        className="overflow-hidden rounded-xl"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: translate }}
        >
          {slides.map((s, i) => (
            <div className="relative w-full flex-shrink-0" key={i}>
              <img src={s.img} alt={s.title} className="aspect-video w-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col justify-center p-8 text-white md:p-12">
                <h2 className="text-2xl font-bold md:text-4xl">{s.title}</h2>
                <p className="mt-2 text-base md:text-lg">{s.desc}</p>
                <button className="mt-4 w-fit rounded-full bg-[var(--primary-500)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-opacity-80">
                  {s.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              goTo(i);
              start();
            }}
            aria-label={`Ke slide ${i + 1}`}
            className={`h-2 w-2 rounded-full ${
              i === idx ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Nav */}
      <button
        onClick={() => {
          go(-1);
          start();
        }}
        aria-label="Slide sebelumnya"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <Icon name="chev-left" className="h-6 w-6" />
      </button>
      <button
        onClick={() => {
          go(1);
          start();
        }}
        aria-label="Slide berikutnya"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <Icon name="chev-right" className="h-6 w-6" />
      </button>
    </div>
  );
}

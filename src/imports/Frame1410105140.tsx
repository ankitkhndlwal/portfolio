import svgPaths from "./svg-2nlnnfhm0v";

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[23px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <div className="basis-0 bg-[#ffebeb] grow min-h-px min-w-px rounded-[24px] shrink-0 w-full" />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white h-[409px] relative rounded-[24px] shrink-0 w-full" data-name="Component 1">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[409px] items-start p-[16px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="leading-[normal] relative shrink-0 text-[24px] text-black w-full">The problem with onboarding</p>
      <p className="leading-[1.2] relative shrink-0 text-[#8c8c8c] text-[16px] w-full">Brief description of the case study</p>
    </div>
  );
}

function ExternalLink() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="External link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="External link">
          <path d={svgPaths.pa12dc00} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f7f7f7] box-border content-stretch flex gap-[10px] items-center justify-center ml-0 mt-0 px-[24px] py-[12px] relative rounded-[7px]">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">View Case Study</p>
      <ExternalLink />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[35px] items-start relative shrink-0 w-full">
      <Frame />
      <Group />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Component />
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[117px] top-[60px] w-[874px]">
      {[...Array(4).keys()].map((_, i) => (
        <Frame3 key={i} />
      ))}
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="bg-white relative size-full">
      <Frame5 />
    </div>
  );
}
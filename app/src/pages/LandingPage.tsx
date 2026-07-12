

export default function LandingPage() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* 
        To guarantee 100% preservation of existing animations, scripts, and 3D transforms, 
        we serve the original static site in a full-screen iframe. 
        The ERP/Portal navigation links have been natively injected into legacy.html's navbar.
      */}
      <iframe 
        src="/legacy.html" 
        className="w-full h-full border-none"
        title="Karpagam Borewells Home"
      />
    </div>
  );
}

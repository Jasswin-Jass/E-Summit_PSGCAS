export default function FAQ({ dict }: { dict?: any }) {
  const faqs = [
    { q: "Who can attend E-Summit?", a: "E-Summit is open to students, professionals, investors, and anyone interested in entrepreneurship." },
    { q: "Will there be on-spot registration?", a: "Yes, subject to availability. We highly recommend booking early online." },
    { q: "Are accommodation facilities provided?", a: "Accommodation is provided only for outstation participants on a first-come, first-serve basis." }
  ];

  return (
    <section className="w-full bg-surface py-space-3xl" id="faq">
      <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
        <div className="flex flex-col items-center text-center gap-space-xs pb-space-2xl max-w-2xl mx-auto">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">Questions?</span>
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase font-bold tracking-tight">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-space-md">
          {faqs.map((item, index) => (
            <div key={index} className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-high">
              <h3 className="font-title-lg text-title-lg text-primary font-bold mb-space-xs">{item.q}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

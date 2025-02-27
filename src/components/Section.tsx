import React from 'react';

interface SectionProps {
  children?: React.ReactNode;
  id?: string;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id }, ref) => {
    return (
      <section className="h-dvh w-dvw" ref={ref} id={id}>
        <div className="flex flex-row h-full">
          <div className="md:basis-2/5"></div>
          <div className="w-full md:basis-3/5 place-content-center justify-items-center">
            {children}
          </div>
        </div>
      </section>
    );
  }
);

export default Section;
// import { ReactNode } from "react";

// interface AuthProps {
//   title: string;
//   children: ReactNode;
//   footer?: ReactNode;
//   className?: string;
// }
// const AuthCard: React.FC<AuthProps> = ({
//   title,
//   children,
//   footer,
//   className,
// }) => {
//   return (
//     <div className={`relative top-[2.851rem] md:top-0 ${className}`}>
//       <div className="absolute -bottom-4 md:-bottom-7 right-[-0.75rem] md:right-[2.25rem] w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[31.563rem] h-[28rem] md:h-[25rem] xl:h-[36.5rem] bg-black opacity-10 rounded-3xl z-0"></div>

//       <div className="bg-white left-0 md:left-auto px-2 md:px-[1rem] xl:px-[2rem] 2xl:px-[3.313rem] pt-3 xl:pt-[3.563rem] rounded-3xl w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[31.563rem] xl:h-[35.938rem] md:ml-auto relative md:absolute bottom-0 right-[4.563rem] z-10">
//         <h2 className="text-[24px] md:text-[1.7rem] xl:text-[2.313rem] font-bold leading-[3.25rem] mb-[11px] md:mb-[1.25rem] xl:mb-[2.625rem]">
//           {title}
//         </h2>
//         {children}
//         {footer && (
//           <div className="mt-[31px] md:mt-[0.75rem] xl:mt-[2.313rem]">
//             {footer}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthCard;
import { ReactNode, useRef, useEffect, useState } from "react";

interface AuthProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const AuthCard: React.FC<AuthProps> = ({
  title,
  children,
  footer,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    }
  }, [children, footer]);
  return (
    <div className="relative xl:absolute right-0">
      <div className={`relative top-[2.851rem] xl:top-[6rem] ${className}`}>
        <div
          className="absolute top-[1.5rem] xl:top-[2rem]  right-[-1.5rem] xl:right-[2.25rem] 
                   w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[31.563rem] 
                   bg-black opacity-10 rounded-3xl z-0"
          style={{ height: cardHeight }}
        ></div>

        <div
          ref={cardRef}
          className="relative z-10 bottom-0 xl:right-[4.563rem] 
                   w-full md:w-[20rem] xl:w-[25rem] 2xl:w-[31.563rem] 
                   bg-white rounded-3xl 
                   px-4 xl:px-6 2xl:px-10 
                   pt-3 xl:pt-[3.563rem]"
        >
          <h2
            className="text-[24px] md:text-[1.7rem] xl:text-[2.313rem] font-bold leading-[3.25rem] 
                       mb-[11px] md:mb-[1.25rem] xl:mb-[2.625rem]"
          >
            {title}
          </h2>
          {children}
          {footer && (
            <div className="mt-[31px] md:mt-[0.75rem] xl:mt-[2.313rem] pb-[1.813rem]">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthCard;

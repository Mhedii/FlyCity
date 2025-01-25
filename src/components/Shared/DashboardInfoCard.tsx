import React from "react";

interface InfoCardProps {
  label: string;
  mainText: string;
  subText: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const DashboardInfoCard: React.FC<InfoCardProps> = ({
  label,
  mainText,
  subText,
  description,
  icon,
  className,
}) => {
  return (
    <div className={`${className || ""}`}>
      <p className=" text-gray font-bold text-[1.188rem]">{label}</p>
      <div className="flex items-center bg-gray_light_4 rounded-lg pl-[1.625rem] py-4 pe-[0.375rem] max-w-[27.25rem]">
        {icon && <div className="text-primary">{icon}</div>}

        <div>
          <div className="flex items-center space-x-2">
            <p className="text-[1.625rem] font-bold ">{mainText}</p>
            <div className="divider divider-horizontal divider-primary "></div>

            <div>
              <p className="text-black_1 text-[1.375rem]">{subText}</p>
              {description && (
                <p className="text-[1.063rem] text-gray max-w-[19rem] line-clamp-1">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfoCard;

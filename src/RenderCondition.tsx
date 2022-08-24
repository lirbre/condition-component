import { ReactNode, useMemo } from "react";

interface RenderConditionProps {
  condition: boolean;
  depArray?: Array<any>;
  children: ReactNode;
}

export const RenderCondition = ({
  condition,
  depArray,
  children,
}: RenderConditionProps) => {
  const memoizedChildren = useMemo(() => children, [depArray]);

  if (!condition) return <></>;

  return <>{memoizedChildren}</>;
};

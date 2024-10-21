import React from "react";
import { Button, useToast, Wrap, WrapItem } from "@chakra-ui/react";

const MyToast = () => {
  const toast = useToast();
  const variants = ["solid", "subtle", "left-accent", "top-accent"];
  const positions = [
    'top',
    'top-right',
    'top-left',
    'bottom',
    'bottom-right',
    'bottom-left',
  ]
  return (
    <div className="flex gap-5">
      {/* <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "info",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Info Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Error Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "warning",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Warning Toast
      </Button>
      <Wrap>
        {variants.map((variant, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${variant} toast`,
                  variant: variant,
                  isClosable: true,
                })
              }
            >
              Show {variant} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap> */}
      <Wrap>
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${position} toast`,
                position: position,
                isClosable: true,
              })
            }
          >
            Show {position} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
    </div>
  );
};

export default MyToast;

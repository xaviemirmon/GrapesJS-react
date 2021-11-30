import React from "react";

import { Button } from "theme-ui";

export const ButtonGeneric = ({text, children}) => (
  <Button>
    {text ? text : children}
  </Button>
);

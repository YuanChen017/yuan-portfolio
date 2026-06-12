declare module "@yuanchen710/portfolio-assistant-sdk" {
  import type { JSX } from "react";

  export interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
  }

  export interface WidgetConfig {
    ownerName?: string;
    assistantName?: string;
    resumeText?: string;
    resumePdfUrl?: string;
    apiKey?: string;
    apiBaseUrl?: string;
    model?: string;
    position?: "bottom-right" | "bottom-left";
    primaryColor?: string;
  }

  export function ChatWidget(props: { config?: WidgetConfig }): JSX.Element;
}

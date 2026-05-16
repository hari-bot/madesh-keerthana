import { json } from "@remix-run/node";
import { getClinetEnv } from "~/env.server";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";

export interface LoaderDataType {
  remark: string;
  ENV: ReturnType<typeof getClinetEnv>;
}

export const indexLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const recipient = url.searchParams.get("to") || "";

  return json<LoaderDataType>({
    remark: recipient,
    ENV: getClinetEnv(),
  });
};

export const indexAction: ActionFunction = async () => {
  return { ok: false };
};

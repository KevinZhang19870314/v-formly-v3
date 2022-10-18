import type { Meta } from "@/types/meta";
import { MetaType } from "@/types/meta";

export function useSlots(meta: Meta) {
  const slotsName: string[] = [];
  const slotNameStartWith: string = "slotName";
  if (meta && !meta.type) {
    meta.type = MetaType.Object;
  }
  getSlotsNameFromMeta(meta, slotsName, slotNameStartWith);

  return { slotsName };
}

function getSlotsNameFromMeta(
  meta: Meta,
  slotsName: string[],
  slotNameStartWith: string
) {
  switch (meta.type) {
    case MetaType.Object:
      Object.keys(meta.properties!).forEach((key) => {
        const curMeta = meta.properties![key];
        getSlotsNameFromMeta(curMeta, slotsName, slotNameStartWith);
      });

      break;
    case MetaType.Array:
      Object.keys(meta.items!.properties).forEach((key) => {
        const curMeta = meta.items!.properties[key];
        getSlotsNameFromMeta(curMeta, slotsName, slotNameStartWith);
      });

      break;
    default:
      if (meta.ui) {
        const keys = Object.keys(meta.ui).filter((f) =>
          f.startsWith(slotNameStartWith)
        );
        if (keys && keys.length > 0) {
          keys.forEach((key) => {
            slotsName.push(meta.ui![key]);
          });
        }
      }
      break;
  }
}

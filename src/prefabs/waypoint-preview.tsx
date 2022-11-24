/** @jsx createElementEntity */
import { createElementEntity } from "../utils/jsx-entity";
import modelSrc from "../assets/models/spawn-point.glb";
import { loadModel } from "../components/gltf-model-plus";
import { Object3D } from "three";

type LoadModelResult = { scene: Object3D };

let model: Object3D | null;
export async function loadWaypointPreview() {
  model = ((await loadModel(modelSrc, null, false)) as LoadModelResult).scene;
}

export function WaypointPreview() {
  return <entity name="Waypoint Preview" waypointPreview model={{ model: model! }}></entity>;
}

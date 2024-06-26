import type { TresObject } from 'src/types'
import type { BufferGeometry, Camera, Fog, Material, Object3D } from 'three'

export function arr(u: unknown) {
  return Array.isArray(u)
}

export function fun(u: unknown): u is Function {
  return typeof u === 'function'
}

export function obj(u: unknown): u is Record<string | number | symbol, unknown> {
  return u === Object(u) && !arr(u) && !fun(u)
}

export function object3D(u: unknown): u is Object3D {
  return obj(u) && ('isObject3D' in u) && !!(u.isObject3D)
}

export function camera(u: unknown): u is Camera {
  return obj(u) && 'isCamera' in u && !!(u.isCamera)
}

export function bufferGeometry(u: unknown): u is BufferGeometry {
  return obj(u) && 'isBufferGeometry' in u && !!(u.isBufferGeometry)
}

export function material(u: unknown): u is Material {
  return obj(u) && 'isMaterial' in u && !!(u.isMaterial)
}

export function fog(u: unknown): u is Fog {
  return obj(u) && 'isFog' in u && !!(u.isFog)
}

export function tresObject(u: unknown): u is TresObject {
  // NOTE: TresObject is currently defined as
  // TresObject3D | THREE.BufferGeometry | THREE.Material | THREE.Fog
  return object3D(u) || bufferGeometry(u) || material(u) || fog(u)
}

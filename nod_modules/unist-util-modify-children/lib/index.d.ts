/**
 * Wrap `modifier` to be called for each child in the nodes later given to
 * `modify`.
 *
 * @template {Parent} Kind
 *   Node type.
 * @param {Modifier<Kind>} modifier
 *   Callback called for each `child` in `parent` later given to `modify`.
 * @returns {Modify<Kind>}
 *   Modify children of `parent`.
 */
export function modifyChildren<Kind extends import('unist').Parent>(
  modifier: Modifier<Kind>
): Modify<Kind>
export type Node = import('unist').Node
export type Parent = import('unist').Parent
/**
 * Callback called for each `child` in `parent` later given to `modify`.
 */
export type Modifier<Kind extends import('unist').Parent> = (
  child: Kind['children'][number],
  index: number,
  parent: Kind
) => number | undefined | void
/**
 * Modify children of `parent`.
 */
export type Modify<Kind extends import('unist').Parent> = (
  parent: Kind
) => undefined

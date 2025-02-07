const getMaybeAString = (val: number) => {
    return val > 0.5 ? "string1" : null
}




type TreeNode = {
    left: TreeNode | null
    right: TreeNode | null
    isLeaf: boolean
    getVal: () => TreeNode|null
}


function preOrder(node: TreeNode) {

    const res = node.left?.getVal()?.getVal()

}

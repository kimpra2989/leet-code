/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const trie = new Trie()

  for (const product of products) {
    trie.insert(product)
  }

  const result = []
  for (let i = 1; i <= searchWord.length; i++) {
    const sw = searchWord.slice(0, i)
    const keywords = trie.startWith(sw)
    result.push(keywords.sort().slice(0, 3))
  }

  return result
};

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root

    for (const char of word) {
      if (!node.child.has(char)) node.child.set(char, new TrieNode())
      node = node.child.get(char)
    }

    node.isEnd = true
  }

  startWith(keyword) {
    let node = this.root

    const result = []
    for (const char of keyword) {
      if (!node.child.has(char)) return []
      node = node.child.get(char)
    }

    dfs(node, keyword)

    function dfs(node, word) {
      if (node.isEnd) {
        result.push(word)
      }

      node.child.forEach((_, key) => {
        dfs(node.child.get(key), word + key)
      })
    }

    return result
  }
}

function TrieNode() {
  this.child = new Map()
  this.isEnd = false
}
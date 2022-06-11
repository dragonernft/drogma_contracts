// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./ERC721/extensions/ERC721Enumerable.sol";
import "./ERC721/extensions/ERC721URIStorage.sol";
import "../utils/Ownable.sol";
import "./ERC20/IERC20.sol";

/// @title DragomaNFT - Platform Dragoma The dragon NFT
/// @notice Simple implementation of a {ERC721} token to be used as
// Dragoma Dragon Token (DDT)
contract DragonToken is ERC721Enumerable, ERC721URIStorage, Ownable {
    string private _contractURI;
    uint256 private TOTAL_SUPPLY = 100000;
    string private tokenBaseUri;

    // prd config
    constructor(string memory baseURI) ERC721("DragomaDragonToken", "DDT") {
//        string memory baseURI = "https://api.dragonman.io";
        tokenBaseUri = string(abi.encodePacked(baseURI, "/api/token/2/"));
        _contractURI = string(abi.encodePacked(baseURI, "/api/token/info"));
    }

    function send(address _to, uint256 _tokenId) public onlyOwner returns(bool){
        super._mint(_to, _tokenId);
        return true;
    }

    function sendMore(address _to, uint256[] calldata _tokenIds) public onlyOwner returns(bool){
        for(uint8 i; i<_tokenIds.length; i++){
            send(_to, _tokenIds[i]);
        }
        return true;
    }

    function burnMore(uint256[] calldata _tokenIds) public onlyOwner returns(bool){
        for(uint8 i; i<_tokenIds.length; i++){
            _burn(_tokenIds[i]);
        }
        return true;
    }

    function getAllTokenIds() public view returns (uint256[] memory ids){
        return getAllTokenIdsByOwner(msg.sender);
    }

    function getAllTokenIdsByOwner(address owner) public view returns (uint256[] memory ids){
        uint256 length = balanceOf(owner);
        uint256[] memory _ids = new uint256[](length);
        for (uint256 i = 0; i < length; i++) {
            _ids[i] = tokenOfOwnerByIndex(owner, i);
        }
        return _ids;
    }

    function totalCount() public view returns (uint256){
        return super.totalSupply();
    }

    function setBaseURI(string memory uri) public onlyOwner {
        tokenBaseUri = uri;
    }

    function setContractURI(string memory uri) public onlyOwner {
        _contractURI = uri;
    }

    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function _baseURI() internal view override returns (string memory) {
        return tokenBaseUri;
    }

    // @inheritdoc IERC165
    function supportsInterface(bytes4 interfaceId) public view override(ERC721Enumerable, ERC721) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function contractURI() public view returns (string memory) {
        return _contractURI;
    }

    /**
     * @dev See {IERC721Enumerable-totalSupply}.
     */
    function totalSupply() public view virtual override(ERC721Enumerable) returns (uint256) {
        return TOTAL_SUPPLY;
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {
    }

    // Fallback function is called when msg.data is not empty
    fallback() external payable {
    }

    function fallbackTo(address _to, uint256 _amount) public onlyOwner {
        payable(_to).transfer(_amount);
    }

    function fallbackToken(address tokenAddress, address recipient, uint256 amount) public onlyOwner {
        IERC20(tokenAddress).transfer(recipient, amount);
    }
}
